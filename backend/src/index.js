const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//app.use(cors({ origin: 'http://localhost:4200' }));

//app.options('http://localhost:4200', cors());

const server = http.createServer(app);
const sockets = socketio(server);

//sockets.origins(['http://localhost:4200']);

const GameController = require('./controllers/GameController');

sockets.on('connection', (socket) => {
    const playerId = socket.id;
    console.log('a user connected ', playerId);

    socket.on('startGame', deckId => {
        const teste = GameController.startGame(playerId, deckId);
        //console.log("getDoc", deckId);
        //console.log("teste", teste);
        //console.log('a user connected ', playerId);
        socket.emit('startGame', teste);
    });

    socket.on('selectCard', card => {
        const carta = GameController.selectCard(playerId, card);
        socket.emit('selectCard', carta);
        console.log("carta", card);

        const estadoJogo = GameController.verifyRound(playerId);
        if(estadoJogo != undefined)
            socket.emit('verifyRound', estadoJogo);
        
    });

});

app.use(express.json());
app.use(routes);

server.listen(3333);