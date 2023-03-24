import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import {v4 as uid} from 'uuid'
import { RequestHandler,Request,Response } from 'express'
import DatabaseHelper  from '../DatabaseHelpers/index';
import  AnswerVoteBody from '../Models/answervote'
import validateAnswerVote from '../Helpers/AnswerVoteHelper'

const _db = new DatabaseHelper();

dotenv.config({ path: path.resolve(__dirname, "../.env") });


//CREATE AN QUESTION VOTE
export const createAnswerVote: RequestHandler = async (req: Request, res: Response) => {
  try {
 
      const voteId = req.params;
      const {answerid, userid, vote } = req.body;

      const newanswerVote = new AnswerVoteBody(
          uid(),
          vote,
          new Date().toISOString(),
          userid,
          answerid
         
      );

      const { error } = validateAnswerVote(newanswerVote);
      console.log(newanswerVote);
      
      if (error) {
          return res.status(400).json({ message: error.details[0].message });
      }

      const answerVoteCreated = await  _db.exec("createAnswerVote", {voteid: newanswerVote.voteid,vote: newanswerVote.vote.toString(),created_at:newanswerVote.created_at,userid: newanswerVote.userid,answerid: newanswerVote.answerid})
      if (!answerVoteCreated) {
        return res.status(400).json({ message: "AnswerVote not created" });
      }else{
        return res.status(201).json(newanswerVote);
      }

  }
  catch (error: any) {

      return res.status(500).json({ error });
  }

}

// GET ALL ANSWER VOTES
export const GetAllAnswerVotes: RequestHandler = async (req: Request, res: Response) => {
  try {
     

      // GET ALL VOTES
      const answerVotes = await _db.exec("getAllAnswerVotes", {});
      if (answerVotes) {
          return res.status(200).json(answerVotes);
      }
      else {
          return res.status(500).json({ message: "VOTES NOT FOUND" });
      }
  }
  catch (err) {
      console.log(err);
      return res.status(500).json({ message: "ERROR" });
  }
}

// GET ANSWER VOTE BY ID

export const GetAnswerVoteById: RequestHandler = async (req: Request, res: Response) => {
  try {
      const { voteid } = req.params;

    
      // get answer vote by id
      const answerVote = await _db.exec("getAnswerVoteById", { voteid: voteid });

      if (answerVote) {
          return res.status(200).json(answerVote);
      }
      else {
          return res.status(500).json({ message: "Vote not found" });
      }
  }
  catch (err) {
      return res.status(500).json({ message: "ERROR" });
  }
}

// UPDATE ANSWER VOTE
export const updateAnswerVote: RequestHandler = async (req: Request, res: Response) => {
  try{

      const { voteid } = req.params;
      const { userid, answerid, vote } = req.body;
      // GET VOTE BY ID FIRST
      const answerVoteToBeUpdate:AnswerVoteBody[] = await _db.exec("getAnswerVoteById", { voteid: voteid }) as unknown as AnswerVoteBody[];

      if (answerVoteToBeUpdate.length > 0) {
          const newVoteUpdate = new AnswerVoteBody(
              voteid,
              new Date(answerVoteToBeUpdate[0].created_at).toISOString(),
              userid,
              answerid,
              vote
          );

          const { error } = validateAnswerVote(newVoteUpdate);
          if (error) {
              return res.status(400).json({ message: error.details[0].message });
          }

          // UPDATE
          const answerVoteUpdate = _db.exec("createAnswerVote", {
              voteid: newVoteUpdate.voteid,
              userid: newVoteUpdate.userid,
              answerid:newVoteUpdate.answerid,
              vote: newVoteUpdate.vote.toString(),
              created_at: newVoteUpdate.created_at,
              
          });

          if (answerVoteUpdate) {
              return res.status(200).json(answerVoteUpdate);
          }
          else {
              return res.status(500).json({ message: "AnswerVote not updated" });
          }
      }

  }
  catch (err: any) {
      console.log(err);
      
      return res.status(500).json({ message: "Error" });
  }
}