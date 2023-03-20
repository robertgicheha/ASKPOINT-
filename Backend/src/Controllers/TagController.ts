import path from "path";
import dotenv from "dotenv";
import { v4 as uid } from "uuid";
import {generateTag,UpdateTag} from "../Helpers/TagHelper";
import { RequestHandler , Request, Response } from 'express';
import { DatabaseHelper } from '../DatabaseHelpers/index';
import { TagBody } from '../Models/tag';


interface ExtendedRequest extends Request {
      body: {Tag: string; CreatedAt:Date;};
    params: { tagId: string };
  }
  
  const _db = new DatabaseHelper();
  
  dotenv.config({ path: path.resolve(__dirname, "../.env") });


//CREATE A TAG
export const CreateTag  = async (req: ExtendedRequest, res: Response) => {

    try {
        const tagId = req.params.tagId

        const { Tag, CreatedAt} = await generateTag.validateAsync(req.body)
        
        const tag: TagBody = {
            tagId : uid(),
            Tag,
            CreatedAt: new Date()
          };

        const { error } = generateTag.validateTag(tag);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const tagcreate = await _db.exec('sp_CreateTag', {tagId:req.params.tagId,Tag:Tag,CreatedAt });
        return res.status(201).json(tagcreate);

      } catch (error) {
        return res.status(500).json(error);
      }
}


// UPDATE TAG

export const UpdateTags  =  async(req: ExtendedRequest, res: Response) => {
    try{
        const tagId = req.params.tagId

        const {  Tag, CreatedAt} = await UpdateTag.validateAsync(req.body)

        const tag: TagBody = {
            tagId : uid(),
            Tag,
            CreatedAt: new Date()
          };

          const { error } = UpdateTag.validateTag(tag);
          if (error) {
              return res.status(400).json({ message: error.details[0].message });
          }


        //Check if Tag exsists

        const GetTag:TagBody= (await _db.exec('sp_GetTagById', {tagId} )).recordset[0]
        if(GetTag){
            // console.log(GetTag);
            
            await _db.exec(' sp_UpdateTag', {tagId,Tag:Tag,CreatedAt})

            return res.status(200).json({message:'The Tag has been updated successfully'})

        }
        return res.status(404).json({error:'Tag Has Not Been Found'}) 

    }catch (error) {
        res.status(500).json(error)
}
}


// GET TAG BY ID

export const getTagById  = async (req: ExtendedRequest, res: Response) => {
    try {
        const  tagId  = req.params.tagId;

        const onetag = await _db.exec('sp_GetTagById', { tagId });
        if (onetag) {
            return res.status(200).json(onetag);
        }

        return res.status(400).json({ message: "Tag Has Not Been Found" });

    } catch (error) {
        return res.status(500).json({ message: "error" });
    }
}



//GET ALL TAGS
export const getAllTags = async (req: ExtendedRequest, res: Response) => {
    try {
       
        const alltags = await _db.exec(' sp_GetAllTags', {});
        if (alltags) {
            return res.status(200).json(alltags);
        }
        return res.status(400).json({ message: "All Tags Not Found" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "error" });
    }
}


// DELETE TAG

export const deleteTag  = async (req: ExtendedRequest, res: Response) => {
    try {
        const tagId  = req.params.tagId;

        // get tag by id
        const tagDelete: TagBody = await _db.exec("sp_GetTagById", { tagId }) as unknown as TagBody;
        if (!tagDelete) {
            return res.status(400).json({ message: "Tag  was not found" });
        }
       
        // delete tag

        const deletedTag = await _db.exec('sp_DeleteTag',  { tagId  });
        if (deletedTag) {
            return res.status(200).json({ message: "Tag  was deleted" });
        }
        return res.status(400).json({ message: "Tag Has NOT Been deleted" });

    } catch (error) {
        return res.status(500).json({ message: " error" });
    }
}


