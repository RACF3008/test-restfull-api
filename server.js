// Importamos HTTP para levantar el servidor de node.js
const http = require('http');
const app = require('./app');
// Si no hay un puerto definido, tomamos el 3000
const port = process.env.PORT || 3000;
// Creamos el servidor HTTP
const server = http.createServer(app);
// Iniciamos el servidor
server.listen(port);