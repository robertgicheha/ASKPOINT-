import path from 'path'
import dotenv from 'dotenv'
import {v4 as uid} from 'uuid'
import validateQuestion  from '../Helpers/QuestionHelper';
import { RequestHandler,Request,Response } from 'express';
import  DatabaseHelper  from '../DatabaseHelpers/index';
import  QuestionBody  from '../Models/question'


// interface ExtendedRequest extends Request{
//     body:{Title:string, Body:string,Tag:string,userId:string, CreatedAt:Date, Views:number},
//     // params:{questionId:string}
// }

const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// CREATE A QUESTION
export const createQuestion: RequestHandler = async (req: Request, res: Response) => {

    try {
 
      const { question, body, userid,views } = req.body;
      
      const questionone = new QuestionBody(
         uid(),
         question,
         body,
         new Date().toISOString(),
         userid,
         views,
    
     );
 
     console.log(questionone);
     
     const { error } = validateQuestion(questionone);
     if (error) {
         return res.status(400).json({ message: error.details[0].message });
     }
     const newquestion = await _db.exec("createQuestion", {questionid: questionone.questionid, question: questionone.question,body: questionone.body, created_at: questionone.created_at.toString(),userid: questionone.userid,views: questionone.views.toString(),
     });
 
     if (newquestion) {
         
         return res.status(201).json({message: "Question Created Successfully"});
     }
     return res.status(400).json({ message: "Question was not created" });
 
     } catch (error : any) {
         return res.status(500).json({ message:"ERROR" });
     }
 
 }
// INCREASE VIEWS
export const increaseQuestionViews : RequestHandler = async (req: Request, res: Response) => {

    try{
        const { questionid } = req.params;

        const moreviews = _db.exec(" IncreaseViews", { questionid });
        if (moreviews) {
            return res.status(200).json(moreviews);
        }
        return res.status(404).json({ message: "Question was  not found" });
    }
    catch (error : any) {
        return res.status(500).json({ message: "ERROR" });
    }


}

// REMOVE/DELETE A QUESTION

export const deleteQuestion : RequestHandler = async (req: Request, res: Response) => {
    
    try {

        const { questionid } = req.params;
        const Deletequestion= await _db.exec("deleteQuestion", { questionid });

        if (Deletequestion) {
            return res.status(200).json(Deletequestion);
        }

        return res.status(404).json({ message: "Questionwas not found" });

    } catch (error : any) {
        return res.status(500).json({ message: "ERROR" });
    }

}

// GET ALL OF THE QUESTIONS QUESTIONS

export const GetAllQuestions : RequestHandler = async (req: Request, res: Response) => {
    try {
     const questions = await _db.exec("getAllQuestions", {});

     if (questions) {
         return res.status(200).json(questions);
     }

     return res.status(404).json({ message: "Questions were  not found" });

    }
 
      catch (error : any) {
         console.log(error);
         return res.status(500).json({ message:"ERROR" });
     }
}

// GET A SINGLE QUESTION BY ID

export const GetQuestionById : RequestHandler = async (req: Request, res: Response) => {

    try {
        const { questionid } = req.params;

        const question = await _db.exec("getQuestionById", { questionid });

        if (question) {
            return res.status(200).json(question);
        }
        return res.status(404).json({ message: "Question was  not found" });

    } catch (error : any) {
        return res.status(500).json({ message: "ERROR" });
    }

}


// UPDATE A QUESTION
export const updateQuestion : RequestHandler = async (req: Request, res: Response) => {
    try {
        const { questionid } = req.params;
    const questionUpdate:QuestionBody[] = await _db.exec("getQuestionById", { questionid }) as unknown as QuestionBody[];

    if (questionUpdate.length === 0) {
        return res.status(404).json({ message: "Question was not found" });
    }
    // console.log(questionUpdate)
    const { question, body, user_id,views } = req.body;

    const questiontwo = new QuestionBody(
        questionid,
        question,
        body,
        new Date(questionUpdate[0].created_at).toISOString(),
        user_id,
        views,
    );

    // console.log(questiontwo)

    const { error } = validateQuestion(questiontwo);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const questionUpdated = await _db.exec("createQuestion", {questionid: questiontwo.questionid,question: questiontwo.question,body: questiontwo.body,created_at: questiontwo.created_at,user_id: questiontwo.userid, views:questiontwo.views.toString(),
    
    });

    // console.log(questionUpdated);

    if (questionUpdated) {
        // return question created
        return res.status(200).json(questionUpdated);
    }

    return res.status(400).json({ message: "Question  was not updated" });

    } catch (error : any) {
        return res.status(500).json({ message: "ERROR" });
        
    }
}



