import path from "path";
import dotenv from "dotenv";
import { v4 as uid } from "uuid";
import mssql from 'mssql'
import sqlConfig from '../Config/config'
import { RequestHandler ,Request, Response } from 'express';
import DatabaseHelper from '../DatabaseHelpers/index';
import CommentBody  from "../Models/comments";
import validateComment from "../Helpers/CommentHelper";
// const _db = new DatabaseHelper();

dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ExtendedRequest extends Request {

  body: { comment: string,  userid: string, answerid: string }
  params: { commentid: string }

}


// CREATE A COMMENT
// Add comment
export async function addComment(req: ExtendedRequest, res: Response) {

    try {
        const commentId = uid()
        const { comment,  userid, answerid } = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()

            .input('id', commentId)
            .input('comment', comment) 
            .input('answerid', answerid)           
            .input('userid', userid)           
            .execute('InsertUpdateComment')

            res.status(201).json(({ message: 'Comment Added Successfully' }))

    } catch (error: any) {

        res.status(500).json(error.message)
    }


}
// export const createComment: RequestHandler = async (req: Request, res: Response) => {
//   try{

//    const commentid = uid()
//       const { comment, userid, answerid,is_deleted} = req.body;
    
//       const Newcomment = new CommentBody(
//           uid(),
//           comment,
//           new Date().toISOString(),
//           userid,
//           answerid,
//           is_deleted
//       );
     
//       // console.log(Newcomment);
//             const { error } = validateComment(Newcomment);
//       if (error) {
//           return res.status(400).json({ message: error.details[0].message });
//       }

  
//       // CREATE COMMENT
      
//       const commentCreate = await _db.exec("createComment", {commentid: Newcomment.commentid,comment: Newcomment.comment,created_at: Newcomment.created_at, userid:Newcomment.userid,answerid: Newcomment.answerid, is_deleted: Newcomment.is_deleted});

//       if (!commentCreate) {
//         return res.status(500).json({ message:"Comment not created" });
//       }
//       else {
//         return res.status(200).json(Newcomment);
          
//       }

//   }
//   catch(error: any){

//       return res.status(500).json({ message:"error" });
//   }
// }

//GET COMMENT BY ID

export const getOneComment = async (req: ExtendedRequest, res: Response) => {

  try {
      const commentid = req.params.commentid
      const pool = await mssql.connect(sqlConfig)
      const comment:Comment[] = await (await pool.request()

          .input('id', commentid)
          .execute('getCommentById')

      ).recordset[0]

      if (!comment) {
          res.status(400).json({ message: 'Comment Not Found' })
      }
      res.status(201).json(comment)

  } catch (error: any) {

      res.status(404).json(error.message)
  }

}


// export const GetCommentsById: RequestHandler = async (req: Request, res: Response) => {
//   try {
//       const { commentid } = req.params;

//       // GET COMMENT
//       const comments = await _db.exec("getCommentById", { commentid });

//       if (!comments) {
//          return res.status(500).json({ message: "Comment not created" });
//       }
      
//       else {
//           return res.status(200).json(comments);
//       }
//   }
//   catch (error: any) {
//       return res.status(500).json({ message: "error"});
//   }
// }

//GET ALL COMMENTS
// get all comments controller
export const getAllComments: RequestHandler = async (req, res) => {
  try {
      const pool = await mssql.connect(sqlConfig)
      const answers= await (await pool.request().execute('getAllComments')).recordset
      res.status(200).json(answers)

  } catch (error: any) {

      res.status(404).json(error.message)
  }
}

// export const GetAllComments : RequestHandler = async (req: Request, res: Response) => {
//   try {
     
//       // get all comments
//       const comments = await _db.exec("getAllComments", {});
//       if (!comments) {
//         return res.status(500).json({ message: "Comments not found" });
         
//       }
//       else {
//         return res.status(200).json(comments);
//       }
//   }
//   catch (error: any) {
//       return res.status(500).json({ message:"error"});
//   }
// }

//UPDATE A COMMENT

// update answer controller
export async function updateComment(req: ExtendedRequest, res: Response) {

  try {
      const { comment, userid, answerid } = req.body
      const pool = await mssql.connect(sqlConfig)

      const oneComment: Comment[] = await (await pool.request()

          .input('id', req.params.commentid)
          .execute('getCommentById')

      ).recordset[0]

      if (oneComment) {
          await pool.request()

          .input('id', req.params.commentid)
          .input('comment', comment) 
          .input('answerid', answerid)           
          .input('userid', userid)           
  
          .execute('InsertUpdateComment')

          return res.status(201).json(({ message: 'Comment Updated' }))
      }

      res.status(404).json(({ error: 'Comment Not Found' }))



  } catch (error: any) {

      res.status(500).json(error.message)
  }

}



// export const updateComment: RequestHandler = async (req: Request, res: Response) => {
//   try{

//       const {commentid } = req.params;
//       const { comment, userid, answerid,is_deleted } = req.body;
//       // get comment by id
//       const commentUpdate:CommentBody[] = await _db.exec("getAllComments", { commentid: commentid }) as unknown as CommentBody[];

//       if (!commentUpdate) {
//           return res.status(404).json({ message: "Comment was  not found" });
//       }

//       const recentcomment = new CommentBody(
//           commentid,
//           comment,
//           new Date(commentUpdate[0].created_at).toISOString(),
//           userid,
//           answerid,
//           is_deleted
//       );

//       const { error } = validateComment(recentcomment);
//       if (error) {
//           return res.status(400).json({ message: error.details[0].message });
//       }

//       // UPDATE COMMENT

//       const commentUpdated = await _db.exec("createComment", {
//           commentid: recentcomment.commentid,
//           comment: recentcomment.comment,
//           created_at: recentcomment.created_at,
//           userid: recentcomment.userid,
//           answerid: recentcomment.answerid,
//           is_deleted: recentcomment.is_deleted
//       });

//       if (commentUpdated) {
//           return res.status(200).json(commentUpdated);
//       }
//       else {
//           return res.status(500).json({ message: "Comment not updated" });
//       }
//   }
//   catch(error: any){
//       return res.status(500).json({ message:error.message });
//   }
// }

//DELETE A COMMENT
// delete Comment

export const deleteComment = async (req: ExtendedRequest, res: Response) => {

  try {
      const pool = await mssql.connect(sqlConfig)

      const oneComment: Comment[] = await (await pool.request()
          .input('id', req.params.commentid)
          .execute(' getCommentById')
      ).recordset[0]

      if (oneComment) {

          await pool.request().input('id', req.params.commentid).execute('deleteComment')

          return res.status(201).json(({ message: 'Comment Deleted' }))
      }

      res.status(404).json(({ error: 'Answer Not Found' }))



  } catch (error: any) {

      res.status(500).json(error.message)
  }

}
// export const DeleteComment: RequestHandler = async (req: Request, res: Response) => {

//   try{
//       const { commentid } = req.params;
    
//       const deletedComment:CommentBody = await _db.exec("deleteComment", { commentid: commentid }) as unknown as CommentBody;

//       if (!deletedComment) {
//         return res.status(500).json({ message: "Comment was not deleted" });
//       } 
//       else {
//         return res.status(200).json(deletedComment);
//       }

//     }
//   catch(error: any){
//       return res.status(500).json({ message:"Error" });
//   }
// }

