import { StatusCodes } from 'http-status-codes/build/cjs/status-codes.js'
import UserRepository from '../../domain/user/user.repository.js'

export async function deleteUser (req, res) {
  const userRepository = new UserRepository()
  // const { error, value } = deleteUserSchema({ id: parseInt(req.params.id) })
  const { OK, NOT_FOUND } = StatusCodes
  // if (error) {
  //   return res.status(BAD_REQUEST).json({
  //     [error.name]: error.message
  //   })
  // }
  // console.log(value)
  const user = await userRepository.deleteUser(parseInt(req.params.id))
  console.log(user)
  if (user) {
    return res.status(OK).json(user)
  }
  res.status(NOT_FOUND).json({
    message: 'User not found'
  })
}
