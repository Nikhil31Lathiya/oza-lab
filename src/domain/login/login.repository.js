import { PrismaClient } from '@prisma/client'

class LoginRepository {
  constructor () {
    this.prisma = new PrismaClient()
  }

  async login (email, password) {
    if (email && password) {
      const userLoggedIn = await this.prisma.user.findMany({ where: { email, password } })
      if (userLoggedIn.length > 0) {
        return userLoggedIn
      }
      return null
    }
  }
}

export default LoginRepository
