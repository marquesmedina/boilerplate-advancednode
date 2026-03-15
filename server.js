'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

app.use(cors({ origin: '*' }));

app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pug');

app.route('/').get((req, res) => {
  res.render('index');
});

fccTesting(app); // For FCC testing purposes

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Listening on port ' + PORT);
});