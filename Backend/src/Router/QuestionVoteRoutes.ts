import { Router } from "express";
import { CreateQuestionVote, GetAllQuestionVotes, GetQuestionVoteById, UpdateQuestionVote } from "../Controllers/QuestionVoteController";


const QuestionVoteRouter = Router();

QuestionVoteRouter.post("/createvote", CreateQuestionVote);
QuestionVoteRouter.get("/getall", GetAllQuestionVotes);
QuestionVoteRouter.get("/getvote/:id", GetQuestionVoteById);
QuestionVoteRouter.put("/update/:id", UpdateQuestionVote);



export default QuestionVoteRouter;