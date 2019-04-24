const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('./db/db')

// const runnersController  = require('./controllers/runners');
// const eventsController = require('./controllers/events');
const authController = require('./controllers/authController.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'Toasts doesnt toast toast, toasters toast toast',
  resave: false,
  saveUninitialized: false
}))

// app.use('/runners', runnersController);
// app.use('/events', eventsController);
app.use('/auth', authController);

app.listen(3000, () => {
  console.log('YEARRRRD: ', 3000);
});