const express = require('express');
const route = express.Router();

const AnaliseDados = require('../controllers/analiseDados.controller.js')

route.get('/analise/:id', AnaliseDados.analise);

module.exports = route;