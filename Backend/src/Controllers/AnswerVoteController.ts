import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import { DatabaseHelper } from '../DatabaseHelpers/index';
import {  AnswerVoteBody } from '../Models/answervote'
import {  GenerateVote, UpdateVote } from '../Helpers/AnswerVoteHelper'


interface ExtendedRequest extends Request{
    body:{userId:string, answerId:string, Value:number, CreatedAt:Date },
    params:{voteId:string},

}

const  _db = new DatabaseHelper()

dotenv.config({ path: path.resolve(__dirname, '../.env') })

//CREATE AN ANSWER VOTE
export const CreateAnswerVote  = async (req: ExtendedRequest, res: Response) => {
    try {
      const voteId = req.params.voteId
      const {userId, answerId, Value, CreatedAt} = await GenerateVote.validateAsync(req.body);
  
      const answervote:AnswerVoteBody = {
                    voteId: uid(),
                    userId,
                    answerId,
                     Value:0,
                    CreatedAt: new Date()
                }

        const {error} =GenerateVote.validate(answervote)
       if(error){
        return res.status(422).json(error.details[0].message)
    }

      
        const result = await _db.exec('sp_CreateAnswerVote', {voteId,userId:userId, answerId:answerId, Value, CreatedAt})
        return res.status(201).json({ result , message:" Answer was successfully voted"});
      }
      
    catch (error) {
      return res.status(500).json(error)
    }
   
  }

// UPDATE ANSWER VOTE
export const UpdateAnswerVote = async (req: ExtendedRequest, res: Response) => {
    try{

      const voteId = req.params.voteId
        const {userId, answerId, Value, CreatedAt} = await UpdateVote.validateAsync(req.body)
        
        // const vote_id = req.params.vote_id
        const answervote:AnswerVoteBody = {
            voteId: uid(),
            userId,
            answerId,
             Value,
            CreatedAt:  new Date()
        }

        const {error} =UpdateVote.validate(answervote)
        if(error){
         return res.status(422).json(error.details[0].message)
     }

        const updateansvote = await _db.exec('sp_UpdateAnswerVote', {voteId ,userId, answerId, Value ,CreatedAt})
        return res.status(200).json({ updateansvote , message:'AnswerVote was Updated Successfully'})

    }catch (error) {
        return res.status(500).json(error)
      }
}


// GET ALL ANSWER VOTES
export const GetAllAnswerVotes = async (req: ExtendedRequest, res: Response) => {
    try{
        const result = await (await _db.exec('sp_GetAllAnswerVotes')).recordset
        return res.status(200).json(result)

    }catch (error) {
        return res.status(500).json(error)
      }
}



// GET ANSWER VOTE BY ID
export const GetAnswerVoteById = async (req: ExtendedRequest, res: Response) => {
    try{
      const voteId = req.params.voteId
       
      const result = await (await _db.exec('sp_GetAnswerVoteById', {voteId})).recordset[0]
        if(result){
          return res.status(200).json(result)
        }
        return res.status(404).json({error:"AnswerVote Was Not Found"})

    }catch (error) {
        return res.status(500).json(error)
      }
}

