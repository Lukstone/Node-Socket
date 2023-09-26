const createServer = require('./src/server.js');
const createClient = require('./src/client.js');
const args = process.argv.slice(2);

if (args.includes('server')) {
  createServer();
} else if (args.includes('client')) {
  createClient();
} else {
  console.error('Please specify either "server" or "client" as an argument.');
}