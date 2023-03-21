import { Router } from "express";
import { createQuestionVote, GetAllQuestionVotes, GetQuestionVoteById, updateQuestionVote } from "../Controllers/QuestionVoteController";


const QuestionVoteRouter = Router();

QuestionVoteRouter.post("/createvote", createQuestionVote);
QuestionVoteRouter.get("/getall", GetAllQuestionVotes);
QuestionVoteRouter.get("/getvote/:id", GetQuestionVoteById);
QuestionVoteRouter.put("/update/:id", updateQuestionVote);



export default QuestionVoteRouter;