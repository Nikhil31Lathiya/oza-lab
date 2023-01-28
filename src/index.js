import express from 'express'
import dotenv from 'dotenv'
import route from './routes/route.js'

// dotenv configuration
dotenv.config()

// app
const app = express()

app.use(express.json())

// port
const port = process.env.PORT || 3000

// listen route
app.use('/', route)

// listen on port
app.listen(port, () => {
  console.log('listening on port: ' + port)
})
