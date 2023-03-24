import { Router } from "express";


import { addQuestion,deleteQuestion,getAllQuestions, getOneQuestion, updateQuestion} from "../Controllers/QuestionsController";
import { VerifyToken } from "../Middlewares/VerifyToken";

 const questionsRouter = Router() 
 questionsRouter.get('/all/all',VerifyToken, getAllQuestions) 
 questionsRouter.post('/create',VerifyToken,  addQuestion) 
 questionsRouter.get('/:id',VerifyToken,  getOneQuestion) 
 questionsRouter.put('/update/:id',VerifyToken, updateQuestion) 
 questionsRouter.delete('/delete/:id',VerifyToken,  deleteQuestion) 








 export default questionsRouter;
// ROUTES FOR QUESTIONS
// questionrouter.route("/create").post(createQuestion);
// questionrouter.route("/update/:id").post(updateQuestion);
// questionrouter.route("/delete/:id").patch(deleteQuestion);
// questionrouter.route("/:id").get(GetQuestionById);
// questionrouter.route("/views").post(increaseQuestionViews);
// questionrouter.route('/all/all').get(GetAllQuestions);

// questionrouter.get('/home',VerifyToken, Homepage)//protected Route



