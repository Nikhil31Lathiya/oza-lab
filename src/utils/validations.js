import Joi from 'joi'
// dob: Joi.date().format('YYYY-MM-DD').options({ convert: false }),
// role: Joi.array().items(Joi.string().valid('User', 'Admin', 'SuperAdmin').insensitive()),
// gender: Joi.array().items(Joi.string().valid('male', 'female').insensitive()),

export const createUserSchema = (body) => {
  return Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().allow('').optional(),
    role: Joi.string().valid('User', 'Admin', 'SuperAdmin').required(),
    gender: Joi.string().valid('Male', 'Female').required(),
    title: Joi.string().valid('Mr', 'Ms', 'Baby', 'Master', 'Dr').required(),
    dob: Joi.date().required(),
    address: Joi.string().min(2).max(100).required(),
    contact: Joi.string().length(10).pattern(/^[0-9]+$/).required()
  }).validate(body)
}

export const deleteUserSchema = (param) => {
  return Joi.object({
    id: Joi.number().required()
  }).validate(param)
}
