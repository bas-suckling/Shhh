const express = require('express')
const router = express.Router()
const db = require('../../db')

router.get('/', (req, res) => {
    res.render('signup')
})

router.post('/newUser', (req, res) => {
    let {username} = req.body;
    let {password} = req.body;
    let newUser = { 
        username,
        password
    }
    console.log(newUser)
    db.createNewUser(newUser)
    .then(() => {
        res.redirect('/login')
    })
})

module.exports = router