import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import { DatabaseHelper } from '../DatabaseHelpers/index';
import {  QuestionVoteBody } from '../Models/questionvote'
import {  GenerateQuestionVote, UpdateQuestionV } from '../Helpers/QuestionVoteHelper'


interface ExtendedRequest extends Request{
    body:{userId:string, questionId:string, Value:number, CreatedAt:Date },
    params:{voteId:string},

}

const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })

//CREATE AN QUESTION VOTE
export const CreateQuestionVote  = async (req: ExtendedRequest, res: Response) => {
    try {
      const voteId = req.params.voteId
      const {userId, questionId, Value,CreatedAt } = await GenerateQuestionVote.validateAsync(req.body);
  
      const questionvote:QuestionVoteBody = {
                    voteId: uid(),
                    userId,
                    questionId,
                    Value:0,
                    CreatedAt:  new Date()
                }



                const {error} =GenerateQuestionVote.validate(questionvote)
                if(error){
                 return res.status(422).json(error.details[0].message)
                }

        const result =   await _db.exec('sp_CreateQuestionVote', {voteId,userId:userId, questionId:questionId, Value, CreatedAt})

        return res.status(201).json({result , message:" Question was successfully voted"})
      
    }catch (error) {
    //   console.log(error)
      return res.status(500).json(error);
    }
  };


// UPDATE QUESTION VOTE
export const UpdateQuestionVote = async (req: ExtendedRequest, res: Response) => {
    try{
      const voteId = req.params.voteId
      const {userId, questionId, Value,CreatedAt } = await UpdateQuestionV.validateAsync(req.body);
  
      const questionvote:QuestionVoteBody = {
                    voteId: uid(),
                    userId,
                    questionId,
                    Value:0,
                    CreatedAt:  new Date()
                }



                const {error} =UpdateQuestionV.validate(questionvote)
                if(error){
                 return res.status(422).json(error.details[0].message)
                }
        const result = await _db.exec('sp_UpdateQuestionVote', {voteId,userId:userId, questionId:questionId, Value, CreatedAt})
        return res.status(200).json({ result , message:'QuestionVote was Updated Successfully'})

    }catch (error) {
        return res.status(500).json(error)
      }
}


// GET ALL QUESTION VOTES
export const GetAllQuestionVotes = async (req: ExtendedRequest, res: Response) => {
    try{
        const result = await (await _db.exec('sp_GetAllAnswerVotes')).recordset
        return res.status(200).json(result)

    }catch (error) {
        return res.status(500).json(error)
      }
}




// GET QUESTION VOTE BY ID
export const GetQuestionVoteById = async (req: ExtendedRequest, res: Response) => {
    try{
      const vote_id = req.params.voteId
       
      const result = await (await _db.exec(' sp_GetAnswerVoteById', {vote_id})).recordset[0]
        if(result){
          return res.status(200).json(result)
        }
        return res.status(404).json({error:"QuestionVote Was Not Found"})

    }catch (error) {
        return res.status(500).json(error)
      }
}





