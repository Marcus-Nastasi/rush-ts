require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes/routes');

app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'dist')));

app.use(routes);

app.listen(process.env.PORT, () => console.log('http://localhost:3001/'));

