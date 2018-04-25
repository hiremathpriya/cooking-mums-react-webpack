const express = require('express')
const cors = require('cors')
const router = express.Router()
const { getImages } = require('../db')


const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
}

router.options('/', cors(corsOptions), (req, res) => {
    console.log('inside options')
})

router.get('/', (req, res) => {

    console.log('inside get for /images');

    getImages().then(imagesArr => {

        res.send({images: imagesArr});
    });
})

module.exports = router