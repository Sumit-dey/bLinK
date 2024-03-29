const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

const { environment } = require('./config');
const isProduction = environment === 'production';

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// If in production, use cors
if (!isProduction) {
    app.use(cors());
}
// app.use(cors());


// app.use(helmet({
//     contentSecurityPolicy: false
// }));


app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// sets _csurf token and creates req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

app.use(routes);
//

// Error handler to catch unhandled errors and send to error handler
app.use((_req, _res, next) => {
    const err = new Error('The requested resource couldn\'t be found.');
    err.title = 'Resource Not Found';
    err.errors = ['The requested resource couldn\'t be found.'];
    err.status = 404;
    next(err);
});

app.use((err, _req, _res, next) => {
    // check if error is from sequelize
    if (err instanceof ValidationError) {
        err.errors = err.errors.map(e => e.message);
        err.title = 'Validation Error';
    }
    next(err);
});

// Error formatter: if not in production, show error stack
app.use((err, _req, res, next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
