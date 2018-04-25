const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const registrations = require('./routes/registrations')
const images = require('./routes/images')


const server = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
}

server.use(morgan('combined'))
server.use(bodyParser.json())

//server.use(cors(corsOptions))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/registrations', registrations)
server.use('/api/v1/images', images)

module.exports = server