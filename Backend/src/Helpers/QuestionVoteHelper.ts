import QuestionVoteBody from "../Models/questionvote";
import Joi from "joi";

const questionVoteStructure = Joi.object({
    vote: Joi.number().required(),
    created_at: Joi.string().required(),
    userid: Joi.string().required(),
    questionid: Joi.string().required(),
    voteid: Joi.string().required()
})

const validateQuestionVote = (questionVote:QuestionVoteBody) => {
    return questionVoteStructure.validate(questionVote)
}

export default validateQuestionVote

