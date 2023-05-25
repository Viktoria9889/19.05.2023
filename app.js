const express = require('express')
const ejs = require('ejs')
const server  = express()


const mainRoute = require('./routes/main')
const mainTitleRoute = require('./routes/mainTitle')
const mainViewRoute = require('./routes/mainView')


server.set('view engine','ejs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))



server.use(express.json())

server.use('/', mainRoute)
server.use('/', mainTitleRoute)
server.use('/', mainViewRoute)

server.listen(3000)