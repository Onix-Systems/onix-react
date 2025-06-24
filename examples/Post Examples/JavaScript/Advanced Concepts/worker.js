// Create a new web worker
const worker = new Worker('worker.js');

// Send a message to the worker
worker.postMessage('Hello from main thread!');

// Receive a message from the worker
worker.onmessage = (event) => {
  console.log('Message received from worker:', event.data);
};

// worker.js
self.onmessage = (event) => {
  console.log('Message received from main thread:', event.data);
  self.postMessage('Hello from worker!');
};
