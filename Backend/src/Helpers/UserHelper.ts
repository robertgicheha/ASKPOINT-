
// import Joi from "joi";
// import UserBody from "../Models/user";

// const userStructure = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().required(),
//     role: Joi.string(),
//     is_deleted: Joi.string(),
//     is_sent: Joi.string(),
//     created_at: Joi.string(),
//     userid: Joi.string().required()
// })

// const validateUser = (user:UserBody) => {
//     return userStructure.validate(user)
// }

// export default validateUser


import Joi from "joi";





export const authSchema=Joi.object({

    name:Joi.string().required().messages({
        'string.empty':'username cannot be empty'
    }),

    email:Joi.string().email().required().messages({
        'string.empty':'Email cannot be empty',
        'string.email':'Enter a valid email'
    }),


    password:Joi.string().required().messages({
        'string.empty':'Password cannot be empty',
    })
    

})


export const loginSchema=Joi.object({

    email:Joi.string().email().required().messages({
        'string.empty':'Email cannot be empty',
        'string.email':'Enter a valid email'
    }),


    password:Joi.string().required().messages({
        'string.empty':'Password cannot be empty',
    })
    

})