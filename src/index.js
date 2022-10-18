const express = require('express')
const morgan = require('morgan')
const router = require('./router/index')
const app = express()
const port = 3001

// app.use(morgan('combined'))
app.use(express.json());
router(app);

app.listen(port, () => {
    console.log(`Listening at Localhost:${port}`)
})