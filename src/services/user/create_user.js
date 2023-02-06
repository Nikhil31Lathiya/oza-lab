import UserRepository from '../../domain/user/user.repository.js';
import { createUserSchema } from '../../utils/validations.js';
import { StatusCodes } from 'http-status-codes';

export async function createUser (req, res) {
  const userRepository = new UserRepository();
  const { error, value } = createUserSchema(req.body);
  const { BAD_REQUEST, OK } = StatusCodes;
  if (error) {
    return res.status(BAD_REQUEST).json({
      [error.name]: error.message
    });
  }
  const user = await userRepository.createUser(value);
  res.status(OK).json(user);
}
