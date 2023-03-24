
import Joi from "joi";
import UserBody from "../Models/user";

const userStructure = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string(),
    is_deleted: Joi.string(),
    is_sent: Joi.string(),
    created_at: Joi.string(),
    userid: Joi.string().required()
})

const validateUser = (user:UserBody) => {
    return userStructure.validate(user)
}

export default validateUser


