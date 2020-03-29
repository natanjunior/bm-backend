const express = require('express');

const PartidaController = require('./controllers/PartidaController');

const routes = express.Router();

routes.get('/partida/:id', PartidaController.get);

module.exports = routes;