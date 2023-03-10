import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const ROLES = ['ADMIN', 'SUPERADMIN', 'USER']

// const PERMISSIONS = [
//   'CAN_MUTATE_USER',
//   'CAN_MUTATE_PATIENT',
//   'CAN_ADD_TEST',
//   'CAN_VIEW_TEST',
//   'CAN_EDIT_TEST',
//   'CAN_DELETE_TEST',
//   'CAN_MUTATE_USER_REPORT',
//   'CAN_VIEW_USER_REPORT'
// ]

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
