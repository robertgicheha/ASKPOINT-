import  QuestionBody  from "../Models/question";
import Joi from "joi";

const questionStructure = Joi.object({
    question: Joi.string().required(),
    body: Joi.string().required(),
    created_at: Joi.string().required(),
    userid: Joi.string().required(),
    views: Joi.number().required(),
    questionid: Joi.string().required()
})


const validateQuestion = (question:QuestionBody) => {

    return questionStructure.validate(question)
}

export default validateQuestion