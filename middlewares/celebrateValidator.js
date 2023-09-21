const { celebrate, Segments } = require('celebrate');

const { schema }= require('../validators/users.validators');

const celebrateValidator = celebrate({
  [Segments.BODY]: schema
})

module.exports= { celebrateValidator };