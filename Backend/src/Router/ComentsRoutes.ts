import { Router } from "express";
import { CreateComment, GetAllComments, UpdateComment, DeleteComment, GetCommentById } from "../Controllers/CommentController";

const CommentRouter = Router();


CommentRouter.post("/create", CreateComment);
CommentRouter.get("/:id", GetCommentById);
CommentRouter.get("/getall", GetAllComments);
CommentRouter.put("/update/:id", UpdateComment);
CommentRouter.delete("/delete/:id", DeleteComment);


export default CommentRouter;
