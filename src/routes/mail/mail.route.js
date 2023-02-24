import express from 'express'
import { SendMail } from '../../services/mail/index.js'
const emailRoute = express.Router()

emailRoute.post('/', async (req, res) => SendMail(req, res))

export default emailRoute
