# Node.js Server Port Already in Use

This repository demonstrates a common error encountered when starting a Node.js HTTP server: the port is already in use.  The example code attempts to start a server on port 8080. If another process is using this port (e.g., another server instance or a different application), the server will fail to start. 

The included solution shows how to handle this scenario gracefully using a try...catch block and a check for the `EADDRINUSE` error code.