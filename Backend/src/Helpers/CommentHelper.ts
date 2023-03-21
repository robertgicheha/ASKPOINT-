import  CommentBody  from "../Models/comments";
import Joi from "joi";

const commentStructure = Joi.object({
    comment: Joi.string().required(),
    created_at: Joi.string().required(),
    userid: Joi.string().required(),
    answerid: Joi.string().required(),
    commentid: Joi.string().required()
})


const validateComment = (comment:CommentBody) => {
    return commentStructure.validate(comment)
}

export default validateComment