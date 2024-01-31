const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    user: "postgres",//process.env.USER,
    host: "localhost",//process.env.HOST,
    password: "admin",//process.env.PASW,
    port: 5432,
    database: "jwttutorial"//process.env.DB 
});

module.exports = pool;
