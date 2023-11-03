const Joi = require("joi");

const CreateUserDetailValidator = Joi.object({
    carModel: Joi.string(),
    images: Joi.array(),
    city: Joi.string(),
    price: Joi.number(),
    phoneNo: Joi.number(),
});

module.exports = {
    CreateUserDetailValidator
}