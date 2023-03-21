import path from 'path'
import dotenv from 'dotenv'
import {v4 as uid} from 'uuid'
import { Request,RequestHandler,Response } from 'express'
import DatabaseHelper  from './Backend/src/DatabaseHelpers/index';
import  AnswerBody from './Backend/src/Models/answer';
import validateAnswer from './Backend/src/Helpers/AnswerHelper'

const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// CREATE ANSWER
export const createAnswer: RequestHandler = async (req: Request, res: Response) => {

    try {
         const answerid = uid()
        const { answer, userid, questionid,is_accepted } = req.body;
        const newanswer = new AnswerBody(
            uid(),
            answer,
            new Date().toISOString(),
            userid,
            questionid,
            is_accepted,
          
        );
        const { error } = validateAnswer(newanswer);
        console.log(newanswer);
        
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        // console.log(newanswer);

        // CREATE ANSWER

        const answerCreated =  _db.exec("createAnswer", {answerid:newanswer.answerid,answer: newanswer.answer, created_at: newanswer.created_at,userid: newanswer.userid, questionid: newanswer.questionid, is_accepted: newanswer.is_accepted
        });
        if (!answerCreated) {
            return res.status(500).json({ message: "Answer not created" });
            
        }
        else {
            return res.status(200).json(newanswer);
        }
    }
    catch (err) {
        return res.status(500).json({ message: " ERROR" });
    }
}

// GET SINGLE ANSWER BY ID
export const GetAnswerById : RequestHandler = async (req: Request, res: Response) => {

    try {
        const answerid = req.params.id

        const oneanswer = await _db.exec("getAnswerById", { answerid})
        if (!oneanswer){
            return res.status(404).json({ message: "Answer not found was  not found" });
        } else{
            return res.status(200).json(
                { message:"Answer was successfully found", oneanswer}
            );
        }
        
    } catch (error) {
        return res.status(500).json({ error });
    }

}


// GET ALL ANSWERS
export const GetAllAnswers: RequestHandler = async (req: Request, res: Response) => {
    
    try {
        //GET ALL
        const answers = await _db.exec("getAllAnswers", {});

        if (!answers) {
            return res.status(500).json({ message: "Answers not found" });
        }
        else {
            return res.status(200).json(answers);
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "error" });
    }
}


// UPDATE AN ANSWER
export const updateAnswer: RequestHandler = async (req: Request, res: Response) => {

    try {
        const {answerid}  = req.params;
        const { answer, is_accepted,userid,questionid} = req.body;

        const answerUpdate =  await _db.exec("getAnswerById", {answerid})

        if (!answerUpdate) {
            return res.status(404).json({ message: "Answer  was not found" });
        }
else{
    const recent = new AnswerBody(
        answerUpdate[0].answerid,
        answer,
        new Date(answerUpdate[0].created_at).toISOString(),
        answerUpdate[0].userid,
        answerUpdate[0].questionid,
        is_accepted.toString()
    );

    const { error } = validateAnswer(recent);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // UPDATE

    const recentans = await _db.exec("createAnswer", { answerid: recent.answerid, answer: recent.answer, created_at: recent.created_at,userid: recent.userid,questionid: recent.questionid,is_accepted: recent.is_accepted
    });

    if (answerUpdate) {
        return res.status(200).json(recentans);
    }
    else {
        return res.status(500).json({ message:  "ANswer Not Updated" });
    }
}
       
    }
    catch (err) {
        return res.status(500).json({ message: " Error" });
    }
}



//  DELETE AN ANSWER
export const DeleteAnswer: RequestHandler = async (req: Request, res: Response) => {
    
        try {
            const answerid = req.params.id;
            const answerdelete =  await _db.exec("deleteAnswer", {answerid});

            if (!answerdelete) {
               return  res.status(500).json({ message: "Answer Not Deleted" });
            }
            else {
               return res.status(200).json({ message: "Answer Deleted"});
            }

        }
        catch (err) {
            return res.status(500).json({ message: " Error" });
        }
    }


    