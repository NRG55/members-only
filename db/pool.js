require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({ connectionString: process.env.NEON_CONNECTION_STRING });