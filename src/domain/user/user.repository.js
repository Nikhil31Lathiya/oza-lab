import { PrismaClient } from '@prisma/client'

class UserRepository {
  constructor () {
    this.prisma = new PrismaClient()
  }

  getUsers () {
    console.log('getUsers')
    return this.prisma.user.findMany()
  }

  getUser (id) {
    return this.prisma.user.findFirst({
      where: {
        id
      }
    })
  }

  getUserByEmail (email) {
    return this.prisma.user.findFirst({
      where: {
        email
      }
    })
  }

  createUser (body) {
    const userObject = {
      ...body,
      roleId: 3
    }
    return this.prisma.user.create({
      data: userObject
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
