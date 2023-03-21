
import AnswerBody from "../Models/answer";
import Joi from "joi";


const answerStructure = Joi.object({
    answer: Joi.string().required(),
    created_at: Joi.string().required(),
    userid: Joi.string().required(),
    questionid: Joi.string().required(),
    answerid: Joi.string().required(),
    is_accepted: Joi.string().required()

    
})

const validateAnswer = (answer:AnswerBody) => {
    return answerStructure.validate(answer)
}
export default validateAnswer
