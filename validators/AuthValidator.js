const Joi = require("joi");

const LoginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(10).required(),
});

module.exports = {
    LoginValidator
}