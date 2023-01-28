import express from 'express'
import userRoute from './user/user.route.js'
const route = express.Router()

route.use('/user', userRoute)

export default route
