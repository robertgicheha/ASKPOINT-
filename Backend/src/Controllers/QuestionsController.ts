import path from 'path'
import dotenv from 'dotenv'
import {v4 as uid} from 'uuid'
import { QuestionGenerate, QuestionUpdate } from '../Helpers/QuestionHelper';
import { RequestHandler,Request,Response } from 'express';
import { DatabaseHelper } from '../DatabaseHelpers/index';
import {  QuestionBody } from '../Models/question'


interface ExtendedRequest extends Request{
    body:{Title:string, Body:string,Tag:string,userId:string, CreatedAt:Date, Views:number},
    params:{questionId:string}
}

const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// CREATE A QUESTION
export const CreateQuestion  = async (req: ExtendedRequest, res: Response) => {
    try{
        const questionId = req.params.questionId
        const {Title,Body,Tag,userId,CreatedAt,Views} = await QuestionGenerate.validateAsync(req.body)

        const question: QuestionBody= {
            questionId :uid(),
            Title,
            Body,
            Tag,
            userId,
            CreatedAt : new Date(),
            Views: 0
        }

       const {error} =QuestionGenerate.validate(question)
       if(error){
        return res.status(422).json(error.details[0].message)
    }

        //create the question
        const createques = await _db.exec('sp_createQuestion',  {questionId, Title:Title, Body:Body,Tag:Tag, userId:userId, CreatedAt, Views })
        res.status(201).json(createques )

        // console.log(question)

    }catch (error) {
    return res.status(500).json(error)
  }
    
}

// UPDATE A QUESTION

export const UpdateQuestion = async (req: ExtendedRequest, res: Response) => {
    try{
        const questionId = req.params.questionId
        const { Title,Body,Tag,userId,CreatedAt,Views} = await QuestionUpdate.validateAsync(req.body)

        const question: QuestionBody= {
            questionId :uid(),
            Title,
            Body,
            Tag,
            userId,
            CreatedAt : new Date(),
            Views: 0
        }

       const {error} =QuestionUpdate.validate(question)
       if(error){
        return res.status(422).json(error.details[0].message)
    }

        //Check if question  exsists
        const FindQuestion:QuestionBody= await (await _db.exec('sp_GetQuestionById', {questionId} )).recordset[0]

        if(FindQuestion){
            console.log(FindQuestion);
            
           const updateques =  await _db.exec('sp_sp_UpdateQuestion', {questionId, Title:Title, Body:Body,Tag:Tag, userId:userId,CreatedAt,Views})

            return res.status(200).json({ updateques , message:'The Question has been updated successfully'})

        }

        return res.status(404).json({error:'Question Has Not Been Found,Update Not Done'}) 

    }catch (error) {
        res.status(500).json(error)
}
}

// REMOVE/DELETE A QUESTION

export const DeleteQuestion = async (req: ExtendedRequest, res: Response) => {
    try{
        const questionId = req.params.questionId


          //Check if question  exsists
        const FindQuestion:QuestionBody= await (await _db.exec('sp_GetQuestionById', {questionId} )).recordset[0]

        //If there,Delete Question
        if(FindQuestion){
            await _db.exec('sp_DeleteQuestion', {questionId})
            return res.status(200).json('Question Deleted Successfully') 
        }

        return res.status(404).json({error:'The Question Not  Been Found'})  
    }catch (error) {
        res.status(500).json(error)
    }
}

// GET ALL OF THE QUESTIONS QUESTIONS

export const GetAllQuestions = async (req: ExtendedRequest, res: Response) => {
    try {
        const result = await _db.exec('GetAllQuestions')
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET THE TOTAL OF ALL QUESTIONS


// GET A SINGLE QUESTION BY ID

export const GetSingleQuestionById = async (req: ExtendedRequest, res: Response) => {
  try{
    const questionId = req.params.questionId
    // console.log(req.params.questions_id)

    const question:QuestionBody= await (await _db.exec('sp_GetQuestionById', {questionId} )).recordset[0]
    if(question){
        await _db.exec('sp_GetQuestionById', {questionId})
        return res.status(200).json(question)
        
    }
    return res.status(404).json({error:'The  Question Not Been Found'}) 

  }catch (error) {
    console.log(error)
    res.status(500).json(error)
}
}

//GET ALL UNANSWERED QUESTIONS


//TOTAL OF ALL UNANSWERED QUESTIONS





