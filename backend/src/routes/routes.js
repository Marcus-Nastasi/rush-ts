const express = require('express');
const routes = express.Router();
const homeCntrl = require('../controllers/homeCntrl');
const cartCntrl = require('../controllers/cartContrl');

routes.get('/', homeCntrl.homepage);

routes.get('/cart', cartCntrl.index);

module.exports = routes;

