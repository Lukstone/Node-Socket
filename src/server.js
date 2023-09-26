const io = require('socket.io')();
const port = 3000;

function createServer() {
  console.log("Socket server started")
  io.on('connection', (socket) => {
    
    console.log('Client connected');


    socket.on('message', (data) => {
      console.log(`Received message: ${data}`);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    process.stdin.on('data', (data) => {
      socket.emit('message', data.toString().trim());
    });
  });

  io.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = createServer;