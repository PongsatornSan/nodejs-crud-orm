const dotenv = require('dotenv');
dotenv.config();

const config = {
    mssql: {
        server: process.env.MSSQL_SERVER,
        port: process.env.MSSQL_PORT,
        username: process.env.MSSQL_USERNAME,
        password: process.env.MSSQL_PASSWORD,
        encrypt: process.env.MSSQL_ENCRYPT,
        enableArithAbort: process.env.MSSQL_ENABLE_ARITH_ABORT,
        database: process.env.MSSQL_DATABASE
    }
}

module.exports = config