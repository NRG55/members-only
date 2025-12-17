const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const pool = require('../db/pool');
require('dotenv').config();

const sessionStore = new pgSession({ pool: pool, createTableIfMissing: true })

module.exports = () => expressSession({
    store: sessionStore, // default tableName: "session"
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
});