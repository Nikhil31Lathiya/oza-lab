import Joi from 'joi'
// dob: Joi.date().format('YYYY-MM-DD').options({ convert: false }),
// role: Joi.array().items(Joi.string().valid('User', 'Admin', 'SuperAdmin').insensitive()),
// gender: Joi.array().items(Joi.string().valid('male', 'female').insensitive()),

export const createUserSchema = (body) => {
  return Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().max(30).min(2).required(),
    lastName: Joi.string().optional().allow(''),
    role: Joi.string().valid('User', 'Admin', 'SuperAdmin'),
    gender: Joi.string().valid('male', 'female'),
    title: Joi.string().valid('mr', 'ms', 'baby', 'master', 'dr'),
    // dob: Joi.string(),
    address: Joi.string().max(100).min(2).required(),
    contact: Joi.string().length(10).pattern(/^[0-9]+$/).required()
  }).validate(body)
}

export const deleteUserSchema = (param) => {
  return Joi.object({
    id: Joi.number().required()
  }).validate(param)
}
