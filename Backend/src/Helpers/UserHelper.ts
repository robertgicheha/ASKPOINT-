import Joi, { ref } from "joi";

// USER REGISTER Helper
export const UserRegisterHelper = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required().email().messages({
    "string.empty": "Please enter an email",
    "string.email": "email is not valid",
  }),
  password: Joi.string().required(),
});

// LOGIN Helper
export const UserLogInHelper = Joi.object({
  Email: Joi.string().required().email().messages({
    "string.empty": "Please provide an email",
    "string.email": "Invalid email",
  }),
  Password: Joi.string().required().messages({
    "string.empty": "Please provide a Password",
  }),
});

// RECOVER PASSWORD Helper
export const UserForgotPasswordHelper = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": "Please enter an email",
    "string.email": " email is not valid",
  }),
});




