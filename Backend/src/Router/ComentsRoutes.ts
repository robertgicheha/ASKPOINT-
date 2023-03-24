import { Router } from "express";

import { addComment, deleteComment, getAllComments, getOneComment, updateComment } from "../Controllers/CommentController";
import { VerifyToken } from "../Middlewares/VerifyToken";


const commentsRouter = Router() 

commentsRouter.get('', VerifyToken, getAllComments) 
commentsRouter.get('/:id',VerifyToken,  getOneComment) 
commentsRouter.post('/add', VerifyToken, addComment) 
commentsRouter.put('/:id',VerifyToken,  updateComment) 
commentsRouter.delete('/:id',VerifyToken,  deleteComment) 



export default commentsRouter
// CommentRouter.post("/create", createComment);
// CommentRouter.get("/:id",  GetCommentsById);
// CommentRouter.get("/getall", GetAllComments);
// // CommentRouter.get("/comment/:id",  GetCommentsByUserId);
// CommentRouter.put("/update/:id", updateComment);
// CommentRouter.delete("/delete/:id", DeleteComment);


