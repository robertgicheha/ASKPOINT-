import path from 'path'
import dotenv from 'dotenv'
import {v4 as uid} from 'uuid'
import {sqlConfig} from '../Config/config'
import mssql from 'mssql'
import {questionSchema} from  '../Helpers/QuestionHelper';
import { RequestHandler,Request,Response } from 'express';
import  DatabaseHelper  from '../DatabaseHelpers/index';
import  QuestionBody  from '../Models/question'
import { DecodedData, Question } from '../Models';



interface ExtendedRequest extends Request {

    body: { question: string, description: string}
    params: { questionid: string }
    info?:DecodedData;

}
// const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })




// CREATE A QUESTION

// add questions controller
export async function addQuestion(req: ExtendedRequest, res: Response) {

    try {
        const questionid = uid()
        const userId = req.info!.userid
        console.log(req.info);
        
        const {  question, description} = req.body
        
        const {error} = questionSchema.validate(req.body)
        if (error) {           
        res.status(422).json(error.details[0].message)
        }
        const pool = await mssql.connect(sqlConfig)
        await pool.request()

            .input('id', questionid)
            .input('question', question)
            .input('description', description)
            .input('userid',userId)
            .execute('InsertUpdateQuestion')

     return   res.status(201).json(({ message: 'Question Added' }))

    } catch (error: any) {

      return  res.status(500).json(error.message)
    }


}




// export const createQuestion: RequestHandler = async (req: Request, res: Response) => {

//     try {
//         // const {questionid} = uid()
//         const questionid=uid()

//       const { question, body, userid} = req.body;
     
//       if(req.body.user){
//         const questionone = new QuestionBody(
//             questionid,
//              question,
//              body
           
//          );
//      const newquestion =  _db.exec("createQuestion", {questionid: questionone.questionid, question: questionone.question,body:questionone.body ,userid:req.body.userid});

//      const { error } = validateQuestion(questionone);
//      if (error) {
//          return res.status(400).json({ message: error.details[0].message });
//      }


     
//      if (!newquestion) {
//         return res.status(400).json({ message: "Question was not created", });
//      }else{
//         return res.status(200).json({message:"Question Created Successfully", questionone});
//      }
    
     
//      } 
//       }
      
      
 
//     //  console.log(questionone);
     
    
//     //  const newquestion =  _db.exec("createQuestion", {questionid: questionone.questionid, question: questionone.question,body: questionone.body, created_at: questionone.created_at, userid: questionone.userid,views: questionone.views.toString(),

    
 
     
//      catch (error : any) {
//          return res.status(500).json({ error });
//      }
 
//  }

  
// INCREASE VIEWS
// export const increaseQuestionViews : RequestHandler = async (req: Request, res: Response) => {

//     try{
//         const { questionid } = req.params;

//         const moreviews:QuestionBody = _db.exec(" IncreaseViews", { questionid:questionid }) as unknown as QuestionBody;
//         if (moreviews) {
//             return res.status(200).json(moreviews);
//         }
//         return res.status(404).json({ message: "Question was  not found"});
//     }
//     catch (error : any) {
//         return res.status(500).json({ message: "ERROR" });
//     }


// }

// REMOVE/DELETE A QUESTION

export const deleteQuestion = async (req: ExtendedRequest, res: Response) => {

    try {
        const pool = await mssql.connect(sqlConfig)

        const oneQuestion: Question[] = await (await pool.request()
            .input('id', req.params.questionid)
            .execute('getQuestionById')
        ).recordset[0]

        if (oneQuestion) {

            await pool.request().input('id', req.params.questionid).execute('deleteQuestion')

            return res.status(201).json(({ message: 'Question Deleted' }))
        }

        res.status(404).json(({ error: 'Question Not Found' }))



    } catch (error: any) {

        res.status(500).json(error.message)
    }

}




// GET ALL OF THE QUESTIONS QUESTIONS

// get all questions controller
export const getAllQuestions: RequestHandler = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const questions: Question[] = await (await pool.request().execute('sp_getAllQuestions')).recordset
       return res.status(200).json(questions)

    } catch (error: any) {

        return res.status(404).json(error.message)
    }
}


// export const GetAllQuestions: RequestHandler = async (req: Request, res: Response) => {
//     try {
     
//      const all =  await _db.exec( 'sp_getAllQuestions' ,{})
//      console.log(all)
//      if (!all) {
//         return res.status(404).json({ message: "Questions were not found"})
//      }else{
//         return res.status(200).json(all)
//      }
     
//     }
//       catch (error : any) {
//          return res.status(500).json( error );
//      }
// }


// GET A SINGLE QUESTION BY ID

// get one question

export const getOneQuestion = async (req: ExtendedRequest, res: Response) => {

    try {
        const id = req.params.questionid
        const pool = await mssql.connect(sqlConfig)
        const question: Question[] = await (await pool.request()

            .input('id', req.params.questionid)
            .execute('getQuestionById')

        ).recordset[0]

        if (!question) {
            res.status(400).json({ message: 'Question Not Found' })
        }
       return res.status(201).json(question)

    } catch (error: any) {

      return  res.status(404).json(error.message)
    }

}

// export const GetQuestionById : RequestHandler = async (req: Request, res: Response) => {

//     try {
//         const questionid = req.params.id
//         const onequestion = await _db.exec("sp_getQuestionById", { questionid})

//         if (!onequestion){
//             return res.status(404).json({ message: "Question was  not found" });
//         } else{
//             return res.status(200).json(
//                 { message:"Question was successfully found", onequestion}
//             );
//         }
        
//     } catch (error : any) {
//         return res.status(500).json({ message: "ERROR" });
//     }

// }


// UPDATE A QUESTION
// update question controller
export async function updateQuestion(req: ExtendedRequest, res: Response) {

    try {
        const {  question, description} = req.body

        const pool = await mssql.connect(sqlConfig)

        const oneQuestion: Question[] = await (await pool.request()

            .input('id', req.params.questionid)
            .execute('getQuestionById')

        ).recordset[0]

        if (oneQuestion) {
            await pool.request()

                .input('id', req.params.questionid)
                .input('question', question)
                .input('category', description)
                .execute('InsertUpdateQuestion')

            return res.status(201).json(({ message: 'Question Updated' }))
        }

       return res.status(404).json(({ error: 'Question Not Found' }))



    } catch (error: any) {

       return res.status(500).json(error.message)
    }

}

