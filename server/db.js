const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    user: process.env.user, 
    host: process.env.host, 
    password: process.env.pass, 
    port: 5432,
    database: process.env.db 
});

module.exports = pool;
