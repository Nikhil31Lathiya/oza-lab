import express from 'express'
import {
  createUser, deleteUser, getUser, getUsers, updateUser
} from '../../services/user/index.js'

const userRoute = express.Router()

userRoute.get('/', (req, res) => getUsers(req, res))
userRoute.get('/:id', (req, res) => getUser(req, res))
userRoute.post('/', (req, res) => createUser(req, res))
userRoute.delete('/:id', (req, res) => deleteUser(req, res))
userRoute.patch('/:id', (req, res) => updateUser(req, res))

export default userRoute;
