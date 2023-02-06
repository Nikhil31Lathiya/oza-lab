import Joi from "joi";

export const createPatientSchema = (body) => {
  return Joi.object({
    homeVisit: Joi.boolean().required(),
  }).validate(body);
};

export const deletePatientSchema = (param) => {
  return Joi.object({
    id: Joi.number().required(),
  }).validate(param);
};
