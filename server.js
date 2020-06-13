// Require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000; 
require('./config/database');

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const ticketsRouter = require('./routes/tickets');


// Set up express app
const app = express();

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/tickets', ticketsRouter);


// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});