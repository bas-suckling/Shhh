const express = require('express');
const server = express()
const hbs = require('express-handlebars')
const login = require('../routes/login')
const signup = require('../routes/signup')
const howitworks = require('../routes/howitworks')




server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))
server.use('/login', login)
server.use('/signup', signup)
server.use('/howitworks', howitworks)


server.get('/', (req, res) => {
    res.render('home')
})

server.get('/signup', (req, res) => {
    res.send(signup)
})

server.get('/login', (req, res) => {
    res.send(login)
})

server.get('/howitworks', (req, res) => {
    res.render('howitworks')
})

server.get('/chat', (req, res) => {
    res.render('chat')
})

server.get('/pagenotfound', (req, res) => {
    res.render('pagenotfound')
})

module.exports = server;





// var io = require('socket.io')(http);
// io.on('connection', function(socket){
//     console.log('user connected');  
    
//     socket.on('chat message', function(msg){
//         io.emit('chat message', msg);  });
        
//     socket.on('disconnect', function(){
//         console.log('user disconnected');  
//     });
// });