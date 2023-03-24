import { Router } from "express";
import {  updateAnswer,  addAnswer, deleteAnswer, getAllAnswers, getOneAnswer } from "../Controllers/AnswersController";
import { VerifyToken } from "../Middlewares/VerifyToken";

const aanswersRouter = Router();

// ROUTES FOR QUESTIONS
aanswersRouter.get('', VerifyToken, getAllAnswers) 
aanswersRouter.get('/:id',VerifyToken,  getOneAnswer) 
aanswersRouter.post('/create',VerifyToken,  addAnswer) 
aanswersRouter.put('/:id',VerifyToken,  updateAnswer) 
aanswersRouter.delete('/:id',VerifyToken,  deleteAnswer) 



// ansrouter.route("/createanswer").post(createAnswer);
// ansrouter.route("/update/:id").post(updateAnswer);
// ansrouter.route("/del/:id").delete(DeleteAnswer);
// ansrouter.route("/:id").get(GetAnswerById);
// ansrouter.route("/all/all/").get(GetAllAnswers);

// questionrouter.get('/home',VerifyToken, Homepage)//protected Route



export default aanswersRouter;