const dp = require('mysql2');
require('dotenv').config();
const pool = dp.createPool({
    host: 'localhost',
    port: 3307 || 3306,
    user: 'root',
    password: '123456',
    database: 'trung142',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});
module.exports = pool;
