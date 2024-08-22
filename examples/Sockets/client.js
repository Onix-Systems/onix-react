const WebSocket = require('ws');

const socket = new WebSocket(‘ws://localhost:8080’);

socket.on(‘open’, () => {
    console.log(‘Connected to the server’);
    socket.send(‘Hello, Server!’);
});

socket.on(‘message’, (message) => {
    console.log(`Received: ${message}`);
});

socket.on(‘close’, () => {
    console.log(‘Disconnected from the server’);
});
