import jwt from 'jsonwebtoken'

class TokenRepository {
  constructor () {
    this.secret = process.env.SECRET_KEY
  }

  async getToken (email) {
    const token = await jwt.sign({ email }, this.secret)
    return token
  }

  async verifyToken (token) {
    const verified = jwt.verify(token, this.secret)
    return verified
  }
}

export default TokenRepository
