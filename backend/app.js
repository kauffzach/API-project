const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

// isProduction variable set to true when in production
const { environment } = require('./config');
const isProduction = environment === 'production';

//initialize express app
const app = express();

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json());

// Security middleware

if(!isProduction) {
    //enable cors in development
    app.use(cors());
}

//helmet sets various headers for app security
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

// _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);


app.use(routes);


module.exports = app;
