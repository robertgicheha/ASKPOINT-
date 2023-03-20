
const Joi = require('joi');


// create tag helper
export const generateTag = Joi.object({
   
    Tag: Joi.string().required(),
    CreatedAt:Joi.date().required()
   
  });

// update tag helper
export const UpdateTag = Joi.object({
    Tag: Joi.string().required(),
    CreatedAt: Joi.date().required()
  
});
