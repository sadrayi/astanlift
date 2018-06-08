#!/usr/bin/env node

/**
 * Module dependencies.
 */


var app = require('./app').app;
var server = require('http').createServer(app);
const io = require('socket.io')(server);


io.on('connection',(socket)=>{
    console.log("connected");
    io.emit('announcements', { message: 'test' });
    console.log(socket.id);
    socket.on('message',(client)=>{
        console.log(socket.id);
        console.log("identifycheck:"+client);
    });
});

server.listen(app.get('port'), () => {
    console.log('App running on port', app.get('port'));
});
