const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const reactSSR = require('../middleware/reactSSR');
const getUser = require('../middleware/getUser');

const sessionConfig = require('./sessionConfig');
const morgan = require('morgan');

module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(reactSSR);
  app.use(getUser);
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.static('public'));
  app.use(express.static('images'))
};
