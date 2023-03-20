import { Router } from "express";
import { CreateQuestion, DeleteQuestion, GetAllQuestions, GetSingleQuestionById, UpdateQuestion } from "../Controllers/QuestionsController";


const questionrouter = Router();

// ROUTES FOR QUESTIONS
questionrouter.route("/create").post(CreateQuestion);
questionrouter.route("/update/:id").post(UpdateQuestion);
questionrouter.route("/delete/:id").patch(DeleteQuestion);
questionrouter.route("/:id").get(GetSingleQuestionById);
questionrouter.route("/allquestions").get(GetAllQuestions);

// questionrouter.get('/home',VerifyToken, Homepage)//protected Route



export default questionrouter;