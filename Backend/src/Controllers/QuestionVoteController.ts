import dotenv from "dotenv";
import path from "path";
import jwt from "jsonwebtoken";
import { v4 as uid } from "uuid";
import { RequestHandler, Request, Response } from "express";
import DatabaseHelper  from "../DatabaseHelpers/index";
import validateQuestionVote from "../Helpers/QuestionVoteHelper";
import QuestionVoteBody from "../Models/questionvote";



// interface ExtendedRequest extends Request {
//   body: {voteid: string;
//     vote: number;
//     created_at: string;
//     userid: string;
//     questionid: string;
//  };
// //   params: { voteId: string };
// }

const _db = new DatabaseHelper();

dotenv.config({ path: path.resolve(__dirname, "../.env") });

//CREATE AN QUESTION VOTE
export const createQuestionVote: RequestHandler = async (req: Request, res: Response) => {
  try {

      const voteId = req.params;
      const {voteid, questionid, userid, vote } = req.body;

      const newquestionVote = new QuestionVoteBody(
          uid(),
          questionid,
          userid,
          vote,
          new Date().toISOString()
      );

      const { error } = validateQuestionVote(newquestionVote);
      if (error) {
          return res.status(400).json({ message: error.details[0].message });
      }

      const questionVoteCreated = await _db.exec("createQuestionVote", {voteid: newquestionVote.voteid,questionid: newquestionVote.questionid,userid: newquestionVote.userid,vote: newquestionVote.vote.toString(),created_at:newquestionVote.created_at,
      });
      if (questionVoteCreated) {
          return res.status(201).json(questionVoteCreated);
      }

      return res.status(400).json({ message: "QuestionVote not created" });
  }
  catch (error: any) {

      return res.status(500).json({ message: error.message });
  }

}

//GET ALL QUESTION VOTES
export const GetAllQuestionVotes: RequestHandler = async (req: Request, res: Response) => {
  try {
     
      const questionVotes = await _db.exec("getAllQuestionVotes", {});
      if (questionVotes) {
          return res.status(200).json(questionVotes);
      }
      return res.status(400).json({ message: "QuestionVotes not found" });
  } catch (error: any) {
      return res.status(500).json({ message:"error" });
  }
}

//GET QUESTION VOTE BY ID
export const GetQuestionVoteById: RequestHandler = async (req: Request, res: Response) => {
  try {
     
      const questionVote = await _db.exec("getQuestionVoteById", { voteid: req.params.voteid });
      if (questionVote) {
          return res.status(200).json(questionVote);
      }
      return res.status(400).json({ message: "QuestionVote not found" });
  } catch (error: any) {
      return res.status(500).json({ message: error.message });
  }
}

//UPDATE QUESTION VOTE
export const updateQuestionVote: RequestHandler = async (req: Request, res: Response) => {
  try {
      const questionVote:QuestionVoteBody[] = await _db.exec("getQuestionVoteById", { voteid: req.params.voteid }) as unknown as QuestionVoteBody[];
      if (questionVote) {
      
          const { questionid, userid, vote } = req.body;
          const newquestionVote = new QuestionVoteBody(
              questionVote[0].voteid,
              vote,
              new Date(questionVote[0].created_at).toISOString(),
              questionid,
              userid,
          );
          const { error } = validateQuestionVote(newquestionVote);
          if (error) {
              return res.status(400).json({ message: error.details[0].message });
          }
          //CUPDATE
          const questionVoteUpdate = await _db.exec("createQuestionVote", {voteid: newquestionVote.voteid,questionid: newquestionVote.questionid,userid: newquestionVote.userid,vote:  newquestionVote.vote.toString(),created_at:  newquestionVote.created_at,
              
          });
          if (questionVoteUpdate) {
              return res.status(200).json(questionVoteUpdate);
          }
          return res.status(400).json({ message: "QuestionVote not updated" });
      }
      return res.status(400).json({ message: "QuestionVote not found" });
  } catch (error: any) {
      return res.status(500).json({ message: "ERROR" });
  }
}





