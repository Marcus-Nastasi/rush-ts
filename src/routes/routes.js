const express = require('express');
const routes = express.Router();
const homeCntrl = require('../controllers/homeCntrl');

routes.get('/', homeCntrl.homepage);

module.exports = routes;

