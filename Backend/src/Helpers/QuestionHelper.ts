const Joi = require("joi");

// create question helper
export const QuestionGenerate = Joi.object({
  Title: Joi.string().required(),
  Tag: Joi.string().required(),
  Body: Joi.string().required(),
  userIid: Joi.string().required(),
  CreatedAt: Joi.date(),
  views: Joi.number()
});

// update question helpers
export const QuestionUpdate = Joi.object({
  Title: Joi.string(),
  Tag: Joi.string(),
  Body: Joi.string(),
  userIid: Joi.string(),
  CreatedAt: Joi.date(),
  views: Joi.number()
});
