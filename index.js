require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello twitter user!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login for backend</h1>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Backend app listening on port ${port}`)
})