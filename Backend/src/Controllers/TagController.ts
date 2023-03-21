import path from "path";
import dotenv from "dotenv";
import { v4 as uid } from "uuid";
import validateTag from "../Helpers/TagHelper";
import { RequestHandler , Request, Response } from 'express';
import  DatabaseHelper  from '../DatabaseHelpers/index';
import TagBody  from '../Models/tag';


// interface ExtendedRequest extends Request {
//       body: {Tag: string; CreatedAt:Date;};
//     params: { tagId: string };
//   }
  
  const _db = new DatabaseHelper();
  
  dotenv.config({ path: path.resolve(__dirname, "../.env") });


//CREATE A TAG
export const createTag:RequestHandler = async (req: Request, res: Response) => {
    try {
        const { tag } = req.body;
        const newtag = new TagBody(
            uid(),
            tag,
            new Date().toISOString(),

        );
        const { error } = validateTag(newtag);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        
        const tagCreated = await _db.exec("createTag", {tagid: newtag.tagid,tag: newtag.tag, created_at: newtag.created_at,});
        if (tagCreated) {
            
            return res.status(201).json(tagCreated);
        }
        return res.status(400).json({ message: "Tag  was not created" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error" });
    }
}


export const GetAllTags:RequestHandler = async (req: Request, res: Response) => {
    try {
        
        const tags = await _db.exec("getAllTags", {})
        if (!tags) {
            return res.status(400).json({ message: "Tags were  not found" });
          
        }else{
            return res.status(200).json(tags);
        }
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error});
    }
}

// GET TAG BY ID

export const GetTagById:RequestHandler = async (req: Request, res: Response) => {
    try {
        const  tagid  = req.params.id
    
        const tag = await _db.exec("getTagById", { tagid });
        if (!tag) {
            return res.status(400).json({ message: "Tag  was not found" });
          
        }else{
            return res.status(200).json(tag);
        }
        
    } catch (error) {
        return res.status(500).json({ message: " error" });
    }
}

// UPDATE TAG

export const updateTag:RequestHandler = async (req: Request, res: Response) => {
    try {
        const tagid = req.params.id
        // GET TAG
        const tagUpdate: TagBody[] = await _db.exec("getTagById", { tagid }) as unknown as TagBody[];
    
        if (!tagUpdate) {
            return res.status(400).json({ message: "Tag was not found" });
        }
        
        const { tag } = req.body;
        const tagtwo = new TagBody(
            tagid,
            tag,
            new Date().toISOString(),
            
        );
        // console.log(TagBody);
        const { error } = validateTag(tagtwo);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
       
        const updatedTag = await _db.exec("createTag", {
            tagid: tagtwo.tagid,
            tag: tagtwo.tag,
            created_at: tagtwo.created_at,
        });

        if (updatedTag) {
            return res.status(200).json(updatedTag);
        }
        return res.status(400).json({ message: "Tag  was not updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: " error" });
    }
}


// DELETE A TAG

export const deleteTag:RequestHandler = async (req: Request, res: Response) => {
    try {
        const tagid  = req.params.id
        // get tag by id
        const tagToDelete: TagBody = await _db.exec("getTagById", { tagid }) as unknown as TagBody;
        if (!tagToDelete) {
            return res.status(400).json({ message: "Tag not found" });
        }else{
 // delete tag
 const deletedTag = await _db.exec("deleteTag", { tagid });
 if (deletedTag) {
     return res.status(200).json({ message: "Tag deleted" });
 }
 return res.status(400).json({ message: "Tag was  not deleted" });
        }
        
       
    } catch (error) {
        return res.status(500).json({ message: " error" });
    }
}


