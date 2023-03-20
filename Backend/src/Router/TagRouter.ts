import { Router } from "express";
import { CreateTag, getTagById, UpdateTags, deleteTag,getAllTags } from "../Controllers/TagController";

const TagRouter = Router();

TagRouter.post("/createtag", CreateTag);
TagRouter.put("/update/:id", UpdateTags);
TagRouter.get("/:id", getTagById);
TagRouter.get("/getall", getAllTags);
TagRouter.delete("/delete/:id", deleteTag);



export default TagRouter;