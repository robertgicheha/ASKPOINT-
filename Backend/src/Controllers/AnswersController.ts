import path from 'path'
import dotenv from 'dotenv'
import {v4 as uid} from 'uuid'
import { Request,RequestHandler,Response } from 'express'
import {sqlConfig} from '../Config/config'
import mssql from 'mssql'
import DatabaseHelper  from '../DatabaseHelpers/index';
import  AnswerBody from '../Models/answer'
import validateAnswer from '../Helpers/AnswerHelper'
import { Answer } from '../Models'

// const  _db = new DatabaseHelper()

interface ExtendedRequest extends Request {

    body: { answer: string,questionid: string,userid: string }
    params: { answerid: string }

}


dotenv.config({ path: path.resolve(__dirname, '../.env') })

// CREATE ANSWER
// export const createAnswer: RequestHandler = async (req: Request, res: Response) => {

//     try {
//          const answerid = uid()
//         const { answer, userid, questionid,is_accepted } = req.body;
//         const newanswer = new AnswerBody(
//             uid(),
//             answer,
//             new Date().toISOString(),
//             userid,
//             questionid,
//             is_accepted,
          
//         );
//         const { error } = validateAnswer(newanswer);
//         console.log(newanswer);
        
//         if (error) {
//             return res.status(400).json({ message: error.details[0].message });
//         }
//         // console.log(newanswer);

//         // CREATE ANSWER

//         const answerCreated =  _db.exec("createAnswer", {answerid:newanswer.answerid,answer: newanswer.answer, created_at: newanswer.created_at,userid: newanswer.userid, questionid: newanswer.questionid, is_accepted: newanswer.is_accepted
//         });
//         if (!answerCreated) {
//             return res.status(500).json({ message: "Answer not created" });
            
//         }
//         else {
//             return res.status(200).json(newanswer);
//         }
//     }
//     catch (err) {
//         return res.status(500).json({ message: " ERROR" });
//     }
// }
// Add an answer
export async function addAnswer(req: ExtendedRequest, res: Response) {

    try {
        const answerid = uid()
        const { answer, userid, questionid } = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()

            .input('id', answerid)
            .input('answer', answer) 
            .input('questionid', questionid)           
            .input('userid', userid)           
            .execute('InsertUpdateAnswer')

            res.status(201).json(({ message: 'Answer Added Successfully' }))

    } catch (error: any) {

        res.status(500).json(error.message)
    }


}

// GET SINGLE ANSWER BY ID
// export const GetAnswerById : RequestHandler = async (req: Request, res: Response) => {

//     try {
//         const answerid = req.params.id

//         const oneanswer = await _db.exec("getAnswerById", { answerid})
//         if (!oneanswer){
//             return res.status(404).json({ message: "Answer not found was  not found" });
//         } else{
//             return res.status(200).json(
//                 { message:"Answer was successfully found", oneanswer}
//             );
//         }
        
//     } catch (error) {
//         return res.status(500).json({ error });
//     }

// }
export const getOneAnswer = async (req: ExtendedRequest, res: Response) => {

    try {
        const answerid = req.params.answerid
        const pool = await mssql.connect(sqlConfig)
        const answer: Answer[] = await (await pool.request()

            .input('id', answerid)
            .execute('getAnswerById')

        ).recordset[0]

        if (!answer) {
            res.status(400).json({ message: 'Question Not Found' })
        }
        res.status(201).json(answer)

    } catch (error: any) {

        res.status(404).json(error.message)
    }

}


// GET ALL ANSWERS
// export const GetAllAnswers: RequestHandler = async (req: Request, res: Response) => {
    
//     try {
//         //GET ALL
//         const answers = await _db.exec("getAllAnswers", {});

//         if (!answers) {
//             return res.status(500).json({ message: "Answers not found" });
//         }
//         else {
//             return res.status(200).json({ message: "Answers successfully found" , answers});
//         }
//     }
//     catch (err) {
//         console.log(err);
//         return res.status(500).json({ message: "error" });
//     }
// }
// get all answers controller
export const getAllAnswers: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const answers = await (await pool.request().execute('getAllAnswers')).recordset
        res.status(200).json(answers)

    } catch (error: any) {

        res.status(404).json(error.message)
    }
}


// UPDATE AN ANSWER
// export const updateAnswer: RequestHandler = async (req: Request, res: Response) => {

//     try {
//         const {answerid}  = req.params;
//         const { answer, is_accepted,userid,questionid} = req.body;

//         const answerUpdate =  await _db.exec("getAnswerById", {answerid})

//         if (!answerUpdate) {
//             return res.status(404).json({ message: "Answer  was not found" });
//         }
// else{
//     const recent = new AnswerBody(
//         answerUpdate[0].answerid,
//         answer,
//         new Date(answerUpdate[0].created_at).toISOString(),
//         answerUpdate[0].userid,
//         answerUpdate[0].questionid,
//         is_accepted.toString()
//     );

//     const { error } = validateAnswer(recent);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }

//     // UPDATE

//     const recentans = await _db.exec("createAnswer", { answerid: recent.answerid, answer: recent.answer, created_at: recent.created_at,userid: recent.userid,questionid: recent.questionid,is_accepted: recent.is_accepted
//     });

//     if (answerUpdate) {
//         return res.status(200).json(recentans);
//     }
//     else {
//         return res.status(500).json({ message:  "ANswer Not Updated" });
//     }
// }
       
//     }
//     catch (err) {
//         return res.status(500).json({ message: " Error" });
//     }
// }
export async function updateAnswer(req: ExtendedRequest, res: Response) {

    try {

        const { answer, userid, questionid } = req.body
        const pool = await mssql.connect(sqlConfig)

        const oneAnswer: Answer[] = await (await pool.request()

            .input('id', req.params.answerid)
            .execute('getAnswerById')

        ).recordset[0]

        if (oneAnswer) {
            await pool.request()

            .input('id', req.params.answerid)
            .input('answer', answer) 
            .input('questionid', questionid)           
            .input('userId', userid)           
            .execute('InsertUpdateAnswer')

            return res.status(201).json(({ message: 'Question Updated' }))
        }

        res.status(404).json(({ error: 'Question Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}








//  DELETE AN ANSWER
// export const DeleteAnswer: RequestHandler = async (req: Request, res: Response) => {
    
//         try {
//             const answerid = req.params.id;
//             const answerdelete =  await _db.exec("deleteAnswer", {answerid});

//             if (!answerdelete) {
//                return  res.status(500).json({ message: "Answer Not Deleted" });
//             }
//             else {
//                return res.status(200).json({ message: "Answer Deleted"});
//             }

//         }
//         catch (err) {
//             return res.status(500).json({ message: " Error" });
//         }
//     }


    // delete answer

export const deleteAnswer = async (req: ExtendedRequest, res: Response) => {

    try {
        const pool = await mssql.connect(sqlConfig)

        const oneAnswer: Answer[] = await (await pool.request()
            .input('id', req.params.answerid)
            .execute('getAnswerById')
        ).recordset[0]

        if (oneAnswer) {

            await pool.request().input('id', req.params.answerid).execute('deleteAnswer')

            return res.status(201).json(({ message: 'Answer Deleted' }))
        }

        res.status(404).json(({ error: 'Answer Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}
