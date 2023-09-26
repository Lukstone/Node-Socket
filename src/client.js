const io = require('socket.io-client');

const socket = io('http://localhost:3000');

function createClient() {
  console.log("Socket client started")
  socket.on('connect', () => {
    console.log('Connected to server');
  });

  process.stdin.on('data', (data) => {
    socket.emit('message', data.toString().trim());
  });

  socket.on('message', (data) => {
    console.log(`Received message: ${data}`);
    handleMessage(data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
}

function handleMessage(data) {
  if (data === 'foo') {
    console.log('Executing function for "foo" message');
  } else if (data === 'bar') {
    console.log('Executing function for "bar" message');
  } else {
    console.log('Unknown message received');
  }
}

module.exports = createClient;