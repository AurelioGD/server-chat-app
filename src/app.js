const express = require('express')
const app = express()

//importing gatherer router
const gathererRouter = require('./routes/gathererRouter')

app.use('/api', gathererRouter)

module.exports=app;