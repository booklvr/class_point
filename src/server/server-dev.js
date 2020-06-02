// const   express =           require('express'),
        // cors =              require('cors'),
        // path =              require('path'),

const   bodyParser =        require('body-parser'),

        passport =          require('passport'),
        LocalStrategy =     require('passport-local'),
        flash =             require('connect-flash'),
        userRouter =        require('./routers/user'),
        classroomRouter =   require('./routers/classroom'),
        studentRouter =     require('./routers/student'),
        gameRouter =        require('./routers/game'),  
        mainRouter =        require('./routers/main'),
        User =           require('../db/models/user');

const connectDB = require('../db/mongoose');

import path     from 'path';
import 'dotenv/config';
import express  from 'express';
import webpack  from 'webpack';
import webpackDevMilddleWare from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import cors from 'cors';
import config from '../../webpack.dev.config.js';
// import bodyParser from 'body-parser';

// import routers from 'routers';

//Connect to database
connectDB();

const app = express(),
      port = process.env.PORT,
      DIST_DIR = __dirname,
      HTML_FILE = path.join(DIST_DIR, 'index.html'),
      compiler = webpack(config);

app.use(webpackDevMilddleWare(compiler, {
    publicPath: config.output.publicPath
}));
    
app.use(webpackHotMiddleware(compiler));

// Body parser
app.use(express.json());

//Enable cors
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.engine('.ejs', 'ejs');

// Set static folder
app.use('/public', express.static(__dirname + "/public"));
// app.use(express.static(__dirname + '/public'));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// set up flash 
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
})

app.use('/users', userRouter);
app.use('/classroom', classroomRouter);
app.use('/student', studentRouter);
app.use('/game', gameRouter);
app.use('/', mainRouter);


app.listen(port, () => console.log(`Server is up on port ${port}`));
