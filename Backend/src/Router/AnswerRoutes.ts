import { Router } from "express";
import { createAnswer, DeleteAnswer, updateAnswer, GetAnswerById, GetAllAnswers } from "../Controllers/AnswersController";


const ansrouter = Router();

// ROUTES FOR QUESTIONS
ansrouter.route("/createanswer").post(createAnswer);
ansrouter.route("/update/:id").post(updateAnswer);
ansrouter.route("/del/:id").delete(DeleteAnswer);
ansrouter.route("/:id").get(GetAnswerById);
ansrouter.route("/allanswers").get(GetAllAnswers);

// questionrouter.get('/home',VerifyToken, Homepage)//protected Route



export default ansrouter;