import { PrismaClient } from '@prisma/client'

class UserReportRepository {
  constructor () {
    this.prisma = new PrismaClient()
  }

  getAllUserReport () {
    return this.prisma.userReport.findMany()
  }

  getUserReport (id) {
    return this.prisma.userReport.findFirst({
      where: {
        id
      }
    })
  }

  createUserReport (body) {
    return this.prisma.userReport.create({
      data: body
    })
  }

  deleteUserReport (id) {
    return this.prisma.userReport.delete({
      where: {
        id
      }
    })
  }

  updateUserReport (id, body) {
    return this.prisma.userReport.update({
      where: {
        id
      },
      data: body
    })
  }
}

export default UserReportRepository
