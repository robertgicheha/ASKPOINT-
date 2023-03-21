
import  AnswerVoteBody from "../Models/answervote";
import Joi from "joi";


const answerVoteStructure = Joi.object({
    voteid: Joi.string().required(),
    vote: Joi.number().required(),
    userid: Joi.string().required(),
    answerid: Joi.string().required,
    createdat: Joi.string().required(),
})

const validateAnswerVote = (answerVote:AnswerVoteBody) => {
    return answerVoteStructure.validate(answerVote)
}


export default validateAnswerVote