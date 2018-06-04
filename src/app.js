const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
// import 'express-handlebars'
const exphbs = require('express-handlebars');

//const controllers = require('./controllers/index');
// import helpers
const helpers = require('./views/helpers/index');

const app = express();
var session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    csrf = require('csurf'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    Account = require(__dirname +'/model/account'),
    compression = require('compression'),
    uristring = process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://localhost/astanliftlocal',
    passport = require('passport');
// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.disable('x-powered-by');
app.use(compression());
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(
    session(
        {
            secret: process.env.SESSION_SECRET || 'majidsadrayi',
            resave: false,
            saveUninitialized: true,
            cookie : {
                maxAge : 7 * 24 * 60 * 60 * 1000 // seconds which equals 1 week
            }
        }
    )
);
app.use(passport.initialize());
app.use(passport.session());
app.use(csrf());
// error handler for csrf tokens
app.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') {
        return next(err);
    }
    // handle CSRF token errors here
    res.status(403);
    res.send('Session has expired or form tampered with.');
})
passport.use(Account.createStrategy());
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  })
);

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
//app.use(controllers);
require(__dirname +'/controllers/index')(app, passport, Account);

module.exports = app;
