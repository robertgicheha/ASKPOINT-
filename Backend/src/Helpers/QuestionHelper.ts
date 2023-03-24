import  QuestionBody  from "../Models/question";
import Joi from "joi";

// const questionStructure = Joi.object({
//     questionid: Joi.string().required(),
//     question: Joi.string().required(),
//     body: Joi.string().required()
//     // created_at: Joi.string().required(),
//     // userid: Joi.string().required(),
//     // views: Joi.number().required(),
  
// })


// const validateQuestion = (question:QuestionBody) => {

//     return questionStructure.validate(question)
// }

// export default validateQuestion

export const questionSchema=Joi.object({

      question:Joi.string().required().messages({
    
        'string.empty':'Question cannot be empty'
    }),
    description:Joi.string().required().messages({
    
        'string.empty':'Description cannot be empty'
    }),
    
    // created_at:Joi.string().required().messages({
    //     'string.empty':'Time cannot be empty'
    // }), 
    
    // userid:Joi.string().required().messages({
    //     'string.empty':'User Id cannot be empty'
    // }),
     
    
    }) 