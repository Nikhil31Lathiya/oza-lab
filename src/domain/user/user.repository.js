import { PrismaClient } from '@prisma/client'

class UserRepository {
  constructor () {
    this.prisma = new PrismaClient()
  }

  getUsers () {
    return this.prisma.user.findMany()
  }

  getUser (id) {
    return this.prisma.user.findFirst({
      where: {
        id
      }
    })
  }

  createUser (body) {
    return this.prisma.user.create({
      data: body
    })
  }

  deleteUser (id) {
    return this.prisma.user.delete({
      where: {
        id
      }
    })
  }

  updateUser (id, body) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: body
    })
  }
}

export default UserRepository
