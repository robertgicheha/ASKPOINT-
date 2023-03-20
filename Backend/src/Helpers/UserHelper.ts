import Joi, { ref } from "joi";

// USER REGISTER Helper
export const UserCreateHelper = Joi.object({
  Name: Joi.string().required(),
  Email: Joi.string().required(),
  Password: Joi.string().required(),
  
});

// LOGIN Helper
export const UserLogInHelper = Joi.object({
  Email: Joi.string().required(),
  Password: Joi.string().required()
});


export const UserUpdateHelper = Joi.object({
  Name: Joi.string().required(),
  Email: Joi.string().required(),
  Password: Joi.string().required(),
 
 
});





