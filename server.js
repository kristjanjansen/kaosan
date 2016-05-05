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

        var key_session = ['ad', 's', data.id, data.type, data.session].join('-')
        var key_aggregate = ['ad', 'a', data.id, data.type].join('-')
        
        //redis.set(key_session, true)
        
        redis.get(key_session, function (err, result) {
        
            if (!result) {
                redis.incr(key_aggregate)
                redis.set(key_session, true)
            }

        });
    
    });

});
