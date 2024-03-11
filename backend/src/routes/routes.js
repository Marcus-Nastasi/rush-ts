const express = require('express');
const routes = express.Router();
const homeCntrl = require('../controllers/homeCntrl');
const cartCntrl = require('../controllers/cartContrl');
const loginCntrl = require('../controllers/loginCntrl')

routes.get('/', homeCntrl.homepage);

routes.get('/cart', cartCntrl.cartPage);

routes.get('/login', loginCntrl.loginPage);

module.exports = routes;

