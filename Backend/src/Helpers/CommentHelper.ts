import  CommentBody  from "../Models/comments";
import Joi from "joi";

const commentStructure = Joi.object({
    commentid: Joi.string().required(),
    comment: Joi.string().required(),
    created_at: Joi.string().required(),
    userid: Joi.string().required(),
    answerid: Joi.string().required(),
    is_deleted:Joi.string()
})


const validateComment = (comment:CommentBody) => {
    return commentStructure.validate(comment)
}

export default validateComment