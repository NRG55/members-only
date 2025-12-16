require('dotenv').config();
const express = require('express');
const path = require('node:path');
const setSessionConfig = require('./config/session');
const indexRouter = require('./routes/indexRouter');
const signUpRouter = require('./routes/signUpRouter');
const joinTheClubRouter = require('./routes/joinTheClubRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
// TODO: set (saveUninitialized: false;) in the session config after testing
app.use(setSessionConfig());

app.use('/', indexRouter);
app.use('/sign-up', signUpRouter);
app.use('/join', joinTheClubRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.error('Server error: ', error);
        throw error;
    };
    console.log(`Express app is listening on port ${PORT}`);    
});