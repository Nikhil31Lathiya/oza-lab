import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function updateUserReport (req, res) {
  const userReportRepository = new UserReportRepository()
  const oldReport = await userReportRepository.getUserReport(parseInt(req.params.id))

  if (!oldReport) {
    return res.status(404).json({ message: 'No Such Report Found' })
  }
  const newReport = await userReportRepository.updateUserReport(parseInt(req.params.id), req.body)
  return res.status(200).json(newReport)
}
