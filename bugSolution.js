const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();

//More robust solution which handles the error
const startServerRobustly = (port) => {
  server.on('error', (err) => {
    if(err.code === 'EADDRINUSE'){
      console.error(`Port ${port} is already in use. Please choose another port.`);
      process.exit(1);
    } else {
      console.error(`Server failed to start: ${err.message}`);
      process.exit(1);
    }
  });

  server.listen(port);
}

startServerRobustly(8080); //This version handles the error more gracefully