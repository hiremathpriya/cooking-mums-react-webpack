const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require('../db')


const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
}

router.options('/', cors(corsOptions), (req, res) => {
    console.log('inside options')
})

router.post('/', function (req, res) {
    const id = db.saveUser(req.body)
    console.log('inserted user id is ' +  id)
    console.log('Received name : ' + req.body.name);
    console.log('Received email : ' + req.body.email);
    //res.sendStatus(200)
    res.send('Thank you for registering !!!');
})

router.get("/", (req, res) => {

    console.log('hi');
    res.send('hello');
})

// router.post('/', function (req, res) {
//   db.saveWidget(req.body)
//   // Normally saveWidget would be async and you'd
//   // have to sendStatus in the .then, but in this
//   // implementation, the data is stored in server
//   // memory and is done synchronously.
//   res.sendStatus(200)
// })

module.exports = router