import Joi from 'joi'

export const createUserSchema = (body) => {
  return Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().max(30).min(2).required(),
    nickname: Joi.string().optional().allow('')

  }).validate(body)
}

export const deleteUserSchema = (param) => {
  return Joi.object({
    id: Joi.number().required()
  }).validate(param)
}
