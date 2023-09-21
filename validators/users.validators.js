const Joi = require("joi");

const schema = Joi.object().keys({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.base": `Username debe de ser una cadena de caracteres`,
    "string.empty": `Username no debe de ser vacio`,
    "string.min": `Username debe tener un minimo de {#limit} caracteres`,
    "any.required": `El campo Username es requerido`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": "El campo email debe de tener un formato valido",
  }),
  phoneNumber: Joi.number().required(),
  password: Joi.string().min(3).max(30).required().messages({
    "string.min": "El campo password debe de tener un minimo de {#limit} caracteres",
  }),
  // state: Joi.boolean(),
  service: Joi.string().required(),
})

module.exports = { schema };