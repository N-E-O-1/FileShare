const files = require('./routes/file')
const path = require('path')
const connectDB = require('./config/db')
const express = require('express')
const show = require('./routes/show')
const app = express()
const download = require('./routes/download')

//template engine
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

connectDB()
app.use(express.json())
app.use('/api/files',files)
app.use('/files',show)
app.use('/files/download',download)
app.use(express.static('public'))

const port = process.env.PORT || 3000
app.listen(port,() => console.log(`listening on ${port}...`))