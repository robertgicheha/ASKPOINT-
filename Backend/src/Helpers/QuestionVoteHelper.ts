const Joi = require('joi');


// create Vote validator
export const GenerateQuestionVote = Joi.object({
    // vote_id:Joi.string().required(),
    userId: Joi.string().required(),
    questionId: Joi.string().required(),
    Value: Joi.string().required(),
    CreatedAt: Joi.date().required()
    
  });

// update vote validator
export const UpdateQuestionV = Joi.object({

    // vote_id:Joi.string().required(),
    userId: Joi.string().required(),
    questionId: Joi.string().required(),
    Value: Joi.string().required(),
    CreatedAt: Joi.date().required()
});
