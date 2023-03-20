const Joi = require('joi');


// create comment helper
export const generateComment = Joi.object({
   
    userId: Joi.string().required(),
    Body: Joi.string().required(),
    answerId: Joi.string().required(),
    CreatedAt: Joi.date().required()
   
  });

// update comment helper
export const updateComment = Joi.object({
    userId: Joi.string().required(),
    Body: Joi.string().required(),
    answerI: Joi.string().required(),
    CreatedAt: Joi.date().required(),
   
  
});
