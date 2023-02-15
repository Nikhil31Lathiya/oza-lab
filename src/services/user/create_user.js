import UserRepository from '../../domain/user/user.repository.js'
import { createUserSchema } from '../../utils/validations.js'

export async function createUser (req, res) {
  const userRepository = new UserRepository()
  const { error, value } = createUserSchema(req.body)
  if (error) {
    return res.status(400).json({
      [error.name]: error.message
    })
  }
  const userFound = await userRepository.getUserByEmail(req.body.email)
  if (userFound) {
    return res.status(400).json({ message: 'Email Already Exists Please try again using another email' })
  }
  const user = await userRepository.createUser(value)
  res.status(200).json(user)
}
