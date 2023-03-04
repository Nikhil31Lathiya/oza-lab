import TokenRepository from '../../domain/token/token.repository.js'
import bcrypt from 'bcrypt'
import UserRepository from '../../domain/user/user.repository.js'

export async function login (req, res) {
  const userRepository = new UserRepository()
  const tokenRepository = new TokenRepository()
  if (!req.body.email && !req.body.password) {
    return res.json({
      message: 'Please enter your email address and password'
    })
  }
  const { email, password } = req.body
  const user = await userRepository.getUserByEmail(email)
  if (!user) {
    return res.json({ message: 'Account doesn`t exist. Please sign up.' })
  }
  if (user) {
    const compared = await bcrypt.compare(password, user.password)
    if (!compared) {
      return res.json({ message: 'Invalid password' })
    }
    const token = await tokenRepository.getToken({ email: req.body.email }, process.env.SECRET_KEY)
    return res.json({ token, user })
  }
}
