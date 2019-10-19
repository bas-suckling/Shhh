var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname+"/../client/index.html"));
});

io.on('connection', function(socket){
    console.log('user connected');  
    
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);  });
        
    socket.on('disconnect', function(){
        console.log('user disconnected');  
    });
});

http.listen(3000, function(){  console.log('listening on port 3000');});