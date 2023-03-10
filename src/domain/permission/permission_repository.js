import { PrismaClient } from '@prisma/client'

class PermissionRepository {
  constructor () {
    this.prisma = new PrismaClient()
  }

  async getPermissionByRoleId (roleId) {
    try {
      const PermissionList = []
      const permissions = await this.prisma.permission.findMany({
        where: {
          roleId
        }
      })
      permissions.forEach(permission => {
        PermissionList.push(permission.permissionName)
      })
      return PermissionList
    } catch (error) {
      console.log(error)
    }
  }
}

export default PermissionRepository
