import express, {Express} from 'express';
import {WebSocketServer} from 'ws';
import {IncomingMessage, Server} from 'http';

import {config} from 'dotenv';

config();
export const colors = {
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  white: '\x1b[37m',
  yellow: '\x1b[33m',
};

export const expressServer: Express = express();
export const wsServer: WebSocketServer = new WebSocketServer({noServer: true});

export const server: Server = expressServer.listen(8080, () => console.log('Listening on port 8080'));
server.on('upgrade', (request: IncomingMessage, socket, head: Buffer) => wsServer.handleUpgrade(request, socket, head, (ws) => wsServer.emit('connection', ws, request)));

expressServer.use((req, res, next) => {
  if (process.env.env === 'dev') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }

  next();
});
expressServer.use(express.static('../../frontend/build'));

expressServer.get('*', (req, res) => res.sendFile('index.html', {root: '../../frontend/build'}));
import('./api/apiRoute.js');
