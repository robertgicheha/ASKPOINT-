const Joi = require('joi');


// create tag helper
export const generatProfile = Joi.object({

    userId: Joi.string().required(),
    Display_name: Joi.string().required(),
    Location: Joi.string().required(),
    About:  Joi.string().required(),
    CreatedAt: Joi.Date().required()
   
  });

// update tag helper
export const updateProfile = Joi.object({
   
  userId: Joi.string().required(),
  Display_name: Joi.string().required(),
  Location: Joi.string().required(),
  About:  Joi.string().required(),
  CreatedAt: Joi.Date().required()
});
