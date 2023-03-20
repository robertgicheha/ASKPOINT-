import path from "path";
import dotenv from "dotenv";
import { v4 as uid } from "uuid";
import {generateComment,updateComment} from "../Helpers/CommentHelper";
import { Request, Response } from 'express';
import { DatabaseHelper } from '../DatabaseHelpers/index';
import { CommentBody } from "../Models/comments";

interface ExtendedRequest extends Request {
  body: {
    answerId: string;
    userId: string;
    Body: string;
    CreatedAt:Date;
  };
  params: { commentId: string };
}

const _db = new DatabaseHelper();

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// CREATE A COMMENT
export const CreateComment = async (req: ExtendedRequest, res: Response) => {
  try {
    const commentId = req.params.commentId
    const {userId, answerId, Body, CreatedAt } = await generateComment.validateAsync(req.body);

    const comment: CommentBody = {
      commentId : uid(),
      userId,
      answerId,
      Body,
      CreatedAt: new Date()
    }; 


    const {error} =generateComment.validate(comment)
    if(error){
     return res.status(422).json(error.details[0].message)
 }

    const result = await _db.exec('sp_CreateComment',  {commentId, userId:userId, answerId:answerId, Body:Body,CreatedAt});
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// UPDATE A COMMENT
export const UpdateComment = async (req: ExtendedRequest, res: Response) => {
  try {
    const commentId = req.params.commentId
    const { userId, answerId, Body, CreatedAt} =await updateComment.validateAsync(req.body);

    const comment: CommentBody = {
      commentId : uid(),
      userId,
      answerId,
      Body,
      CreatedAt: new Date()
    }; 


    const {error} =updateComment.validate(comment)
    if(error){
     return res.status(422).json(error.details[0].message)
 }


    const result = await _db.exec('sp_UpdateComment', {commentId, userId:userId, answerId:answerId, Body:Body,CreatedAt});
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET ALL COMMENTS
export const GetAllComments = async (req: Request, res: Response) => {
  try {
    const result = await _db.exec('sp_GetAllComments');
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// DELETE A COMMENT
export const DeleteComment = async (req: ExtendedRequest, res: Response) => {
  try {
 const commentId = req.params.commentId
 console.log(commentId)

 const comment = await  (await _db.exec('sp_GetCommentsById', {commentId})).recordset[0]

    if(comment){
    await _db.exec('sp_DeleteComment', {commentId: req.params.commentId, userId:req.body.userId});
          return res.status(200).json({message:'Comment Has Been Deleted Successfully'})
    }
   
        return res.status(404).json({message:'Comment Not Been Found'})
    
    
  } catch (error) {
    return res.status(500).json({error:"Comment Not Deleted"})
  }
};

// GET A COMMENT BY ID
export const GetCommentById = async (req: ExtendedRequest, res: Response) => {
  try {


    const result = await (await _db.exec('sp_GetCommentsById', {
      commentId: req.params.commentId,})).recordset[0];
    if(result){
            return res.status(200).json(result);

    }
    return res.status(404).json({error:'You Comment Was Not Found'})  

  } catch (error) {
    return res.status(500).json(error);
  }
};
