
import  AnswerVoteBody from "../Models/answervote";
import Joi from "joi";


const answerVoteStructure = Joi.object({
    vote: Joi.number().required(),
    created_at: Joi.string().required(),
    userid: Joi.string().required(),
    answerid: Joi.string().required(),
    voteid: Joi.string().required()
 
})

const validateAnswerVote = (answerVote:AnswerVoteBody) => {
    return answerVoteStructure.validate(answerVote)
}


export default validateAnswerVote