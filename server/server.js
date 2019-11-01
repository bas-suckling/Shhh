const express = require('express');
const server = express()
const path = require('path');
const hbs = require('express-handlebars')



server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))


server.get('/', (req, res) => {
    res.render('home')
})

server.get('/signup', (req, res) => {
    res.render('signup')
})

server.get('/login', (req, res) => {
    res.render('login')
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