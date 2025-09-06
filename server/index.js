import express from 'express'
import {getToken} from '../src/api/auth.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/api/token', async (req, res) => {
  const tokenObject = await getToken(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
  res.json(tokenObject)
})

app.listen(4001, () => {
  console.log(`Server running on http://localhost:4001`)
})
