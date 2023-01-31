import express from 'express'
import dotenv from 'dotenv'
import route from './routes/route.js'
import swaggerUI from 'swagger-ui-express'
import { readFileSync } from 'fs'
const swaggerJSON = JSON.parse(readFileSync('src/lib/swagger/swagger.json'))

// dotenv configuration
dotenv.config()

// app
const app = express()

app.use(express.json())

// port
const port = process.env.PORT || 3000

// swagger UI configuration
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

// listen route
app.use('/', route)

// listen on port
app.listen(port, () => {
  console.log('listening on port: ' + port)
})
