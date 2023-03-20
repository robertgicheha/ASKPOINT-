import { Router } from "express";
import { CreateAnswer, DeleteAnswer, UpdateAnswer, GetSingleAnswerById, GetAllAnswers } from "../Controllers/AnswersController";


const ansrouter = Router();

// ROUTES FOR QUESTIONS
ansrouter.route("/createanswer").post(CreateAnswer);
ansrouter.route("/update/:id").post(UpdateAnswer);
ansrouter.route("/delete/:id").patch(DeleteAnswer);
ansrouter.route("/:id").get(GetSingleAnswerById);
ansrouter.route("/allanswers").get(GetAllAnswers);

// questionrouter.get('/home',VerifyToken, Homepage)//protected Route



export default ansrouter;