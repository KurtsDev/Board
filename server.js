var http = require('http').Server();
var io = require('socket.io')(http);

var Redis = require('ioredis');
var redis = new Redis(6379);

console.log(redis);



redis.subscribe('message-channel');
redis.on('message', function (channel, message) {
    console.log('channel:' + channel);
    console.log('message:' + message);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});

http.listen(3000, function () {
    console.log('server on port 3000');
});
