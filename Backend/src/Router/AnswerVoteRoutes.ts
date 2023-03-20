import { Router } from "express";
import { CreateAnswerVote, GetAllAnswerVotes, GetAnswerVoteById, UpdateAnswerVote } from "../Controllers/AnswerVoteController";


const AnswerVoteRouter = Router();


AnswerVoteRouter.post("/createvote", CreateAnswerVote);
AnswerVoteRouter.get("/getall", GetAllAnswerVotes);
AnswerVoteRouter.get("/:id", GetAnswerVoteById);
AnswerVoteRouter.put("/update/:id", UpdateAnswerVote);


export default AnswerVoteRouter;
