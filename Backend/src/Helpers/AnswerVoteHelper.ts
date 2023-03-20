const Joi = require('joi');


// create Vote validator
export const GenerateVote = Joi.object({
    // vote_id:Joi.string().required(),
    userId: Joi.string().required(),
    answerId: Joi.string().required(),
    Value: Joi.string().required(),
    CreatedAt: Joi.date().required()
    
  });

// update vote validator
export const UpdateVote = Joi.object({

    // vote_id:Joi.string().required(),
    answerId: Joi.string().required(),
    userId: Joi.string().required(),
    Value: Joi.string().required(),
    CreatedAt: Joi.date().required()
});
