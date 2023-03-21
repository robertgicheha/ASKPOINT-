import { Router } from "express";
import { createQuestion, deleteQuestion, GetAllQuestions,  GetQuestionById,  increaseQuestionViews, updateQuestion } from "../Controllers/QuestionsController";


const questionrouter = Router();

// ROUTES FOR QUESTIONS
questionrouter.route("/create").post(createQuestion);
questionrouter.route("/update/:id").post(updateQuestion);
questionrouter.route("/delete/:id").patch(deleteQuestion);
questionrouter.route("/:id").get( GetQuestionById);
questionrouter.route("/views").post( increaseQuestionViews);
questionrouter.route("/allquestions").get(GetAllQuestions);

// questionrouter.get('/home',VerifyToken, Homepage)//protected Route



export default questionrouter;