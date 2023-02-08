import UserReportRepository from '../../domain/userReport/userReport.repository.js'
import { StatusCodes } from 'http-status-codes'
import { createUserReportSchema } from '../../utils/validations.js'

export async function createUserReport (req, res) {
  const userReportRepository = new UserReportRepository()
  const { error, value } = createUserReportSchema(req.body)
  const { BAD_REQUEST, OK } = StatusCodes
  if (error) {
    return res.status(BAD_REQUEST).json({
      [error.name]: error.message
    })
  }
  const userReport = await userReportRepository.createUserReport(value)
  res.status(OK).json(userReport)
}
