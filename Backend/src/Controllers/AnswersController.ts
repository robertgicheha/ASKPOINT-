import path from 'path'
import dotenv from 'dotenv'
import {v4 as uid} from 'uuid'
import{AnswerGenerate, AnswerUpdateHelper} from '../Helpers/AnswerHelper'
import { Request,RequestHandler,Response } from 'express'
import { DatabaseHelper } from '../DatabaseHelpers/index';
import { AnswerBody } from '../Models/answer';

interface ExtendedRequest extends Request{
    body:{ userId:string,questionId:string,Title:string,Body:string,CreatedAt:Date},
     params:{answerId:string},
    
}

const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// CREATE ANSWER
export const CreateAnswer = async (req:ExtendedRequest, res: Response) => {

    try{

        const answerId = req.params.answerId
        const { Title,Body, questionId,userId, CreatedAt} = await AnswerGenerate(req.body)

        const answer: AnswerBody = {
            answerId: uid(),
            questionId,
            Title,
            Body,
            userId,
            CreatedAt:new Date()
           
        }

        const {error} = AnswerGenerate.validate(answer)
       if(error){
        return res.status(422).json(error.details[0].message)
    }
      
        const result = await _db.exec('sp_CreateAnswer', {answerId, Title:Title, Body:Body, userId:userId, questionId:questionId, CreatedAt, } )
        return  res.status(201).json(result)

    }   
    catch (error) {
            return res.status(500).json(error)
          }
}
// UPDATE AN ANSWER
export const UpdateAnswer = async (req: ExtendedRequest, res: Response) => {
    try {


       const answerId = req.params.answerId
        const { Title,Body, questionId,userId, CreatedAt} = await AnswerUpdateHelper(req.body)

        const answer: AnswerBody = {
            answerId: uid(),
            questionId,
            Title,
            Body,
            userId,
            CreatedAt:new Date()
           
        }

        const {error} = AnswerUpdateHelper.validate(answer)
       if(error){
        return res.status(422).json(error.details[0].message)
    }
      
        const updateans = await _db.exec('sp_Updateanswer', {answerId, Title:Title, Body:Body, userId:userId, questionId:questionId, CreatedAt, } )

        return res.status(200).json({ updateans , message:' Answer Was Updated  Successfully'})

       
    } catch (error) {
        console.log(error)
       return res.status(500).json(error)
    }
}

// GET SINGLE ANSWER BY ID
export const GetSingleAnswerById = async (req: ExtendedRequest, res: Response) => {
    try {
        const answerId = req.params.answerId
        // console.log(req.params)
        const result = await (await _db.exec('sp_GetAnswerById', {answerId})).recordset[0]

        if(result){
            return res.status(200).json(result)
        }
        return res.status(404).json({error:'Your Answer Not  Been Found'}) 
        
    } catch (error) {
       return res.status(500).json(error)
    }
}


// GET ALL ANSWERS
export const GetAllAnswers = async (req: ExtendedRequest, res: Response) => {
    try {
        const result = await _db.exec('sp_GetAllAnswers')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
}




// DELETE AN ANSWER
export const DeleteAnswer = async (req: ExtendedRequest, res: Response) => {
    try {
        const answerId = req.params.answerId
         await _db.exec('sp_Deleteanswer', {answerId})

        res.status(200).json({message: "The Answer Was Deleted Successfully"})
    } catch (error) {
        return res.status(500).json(error)
    }
}





