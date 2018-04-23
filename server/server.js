const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const registrations = require('./routes/registrations.js')

const server = express()

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
}

server.use(bodyParser.json())

server.use(cors(corsOptions))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/registrations', registrations)

module.exports = server