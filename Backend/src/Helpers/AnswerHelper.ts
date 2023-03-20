import { ref } from "joi";

const Joi = require('joi');


// ANSWER HELPER
export const AnswerGenerate = Joi.object({
  UserId: Joi.string().required(),
  questionId: Joi.string().required(),
  Title: Joi.string().required(),
  Body: Joi.string().required(),
  CreatedAt:Joi.date().required()
  

  });

// UPDATE ANSWER
export const AnswerUpdateHelper = Joi.object({
  userIdd: Joi.string().required(),
  questionId: Joi.string().required(),
  Title: Joi.string().required(),
  Body: Joi.string().required(),
  CreatedAt:Joi.date().required()

});



