const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "admin",
    port: 5432,
    database: "jwttutorial"
});

module.exports = pool;
