require('dotenv').config();
const express = require('express');
const path = require('node:path');
const setSessionConfig = require('./config/session');
const passport = require('./config/passport');
const addCurrentUserToLocals = require('./middlewares/addCurrentUserToLocals');
const indexRouter = require('./routes/indexRouter');
const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const joinTheClubRouter = require('./routes/joinTheClubRouter');
const logoutRouter = require('./routes/logoutRouter');
const messageRouter = require('./routes/messageRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(setSessionConfig());
app.use(passport.session());
app.use(addCurrentUserToLocals);

app.use('/', indexRouter);
app.use('/sign-up', signupRouter);
app.use('/log-in', loginRouter);
app.use('/join', joinTheClubRouter);
app.use('/log-out', logoutRouter);
app.use('/message', messageRouter);
app.use('/admin', adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.error('Server error: ', error);
        throw error;
    };
    console.log(`Express app is listening on port ${PORT}`);    
});