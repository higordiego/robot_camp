var socket = require('socket.io-client')('http://34.219.164.43:3500');

socket.on('connect', function () {
    console.log('connectado')
    socket.on('message', function (msg) {
        socket.emit('post', JSON.stringify({ rooms: 'porradeirasinistra', text: 'bot03' }));
    })
})