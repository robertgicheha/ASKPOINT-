import { Router } from "express";
import { createAnswerVote, GetAllAnswerVotes, GetAnswerVoteById, updateAnswerVote } from "../Controllers/AnswerVoteController";


const AnswerVoteRouter = Router();


AnswerVoteRouter.post("/create",createAnswerVote);
AnswerVoteRouter.get("/getall", GetAllAnswerVotes);
AnswerVoteRouter.get("/:id", GetAnswerVoteById);
AnswerVoteRouter.put("/update/:id", updateAnswerVote);


export default AnswerVoteRouter;
