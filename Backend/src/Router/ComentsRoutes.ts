import { Router } from "express";
import { createComment, GetAllComments, updateComment, DeleteComment, GetCommentsById, } from "../Controllers/CommentController";

const CommentRouter = Router();


CommentRouter.post("/create", createComment);
CommentRouter.get("/:id",  GetCommentsById);
CommentRouter.get("/getall", GetAllComments);
// CommentRouter.get("/comment/:id",  GetCommentsByUserId);
CommentRouter.put("/update/:id", updateComment);
CommentRouter.delete("/delete/:id", DeleteComment);


export default CommentRouter;
