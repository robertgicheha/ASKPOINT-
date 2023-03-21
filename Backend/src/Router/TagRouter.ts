import { Router } from "express";
import { createTag, GetTagById, updateTag, deleteTag,GetAllTags } from "../Controllers/TagController";

const TagRouter = Router();

TagRouter.post("/createtag", createTag);
TagRouter.put("/update/:id", updateTag);
TagRouter.get("/:id", GetTagById);
TagRouter.get("/getall", GetAllTags);
TagRouter.delete("/delete/:id", deleteTag);



export default TagRouter;