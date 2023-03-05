import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const ROLES = ['ADMIN', 'SUPERADMIN', 'USER']

async function main () {
  Promise.all(
    ROLES.map((roleItem) => {
      return prisma.role.create({ data: { role: roleItem } })
    })
  )
}
main()
  .then(async () => {
    console.log('seeds added successfully')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
