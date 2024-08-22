const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on(‘connection’, (socket) => {
    console.log(‘Client connected’);

    socket.on(‘message’, (message) => {
        console.log(`Received: ${message}`);
        // Echo the message back to the client
        socket.send(`Server received: ${message}`);
    });

    socket.on(‘close’, () => {
        console.log(‘Client disconnected’);
    });
});

console.log(‘WebSocket server is running on ws://localhost:8080’);
