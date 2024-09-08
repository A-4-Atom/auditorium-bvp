const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  user: process.env.DB_PASSWORD,
  user: process.env.DB_HOST,
  user: process.env.DB_PORT,
  user: process.env.DB_NAME,
});

module.exports = pool;
