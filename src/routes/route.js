import express from 'express'
import userRoute from './user/user.route.js'
import userReportRoute from './userReport/userReport.route.js'
const route = express.Router()

route.use('/user', userRoute)
route.use('/userReport', userReportRoute)
export default route
