var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Redis = require('ioredis');

var port = 7000

app.use(express.static('public'));
server.listen(port);

var redis = new Redis();

io.on('connection', function (socket) {

    socket.on('ad', function (data) {
        
        console.log(data)

        redis.set(['ad', data.id, data.type, data.session, data.timestamp].join('-'), true)
    
    });

});
