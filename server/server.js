const express = require('express');
const server = express()
const path = require('path');

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname+"/../client/index.html"));
});

server.get('/:page', function (req, res){
    let {page} = req.params
    res.sendFile(path.resolve(__dirname + "/../client/" + page + ".html"))
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