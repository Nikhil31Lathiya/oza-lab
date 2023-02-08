import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function deleteUserReport (req, res) {
  const userReportRepository = new UserReportRepository()

  const user = await userReportRepository.deleteUserReport(parseInt(req.params.id))

  if (user) {
    return res.status(200).json(user)
  }
  res.status(404).json({ message: 'No such Report Found' })
}
