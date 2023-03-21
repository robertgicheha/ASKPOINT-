
import Joi from "joi";
import TagBody from "../Models/tag";

const tagStructure = Joi.object({
    tag: Joi.string().required(),
    created_at: Joi.string().required(),
    tagid: Joi.string().required()
})

const validateTag = (tag:TagBody) => {
    return tagStructure.validate(tag)
}

export default validateTag
