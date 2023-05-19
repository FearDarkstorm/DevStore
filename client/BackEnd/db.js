const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    password: 'import pandas',
    host: 'localhost',
    port: 5432,
    database: 'devstore'
});
module.exports = pool;



