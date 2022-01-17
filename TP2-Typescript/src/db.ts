require('dotenv').config()
const Pool = require('pg-pool');

//url de conexao fornecida no elephant
const connectionString = process.env.URL_ELEPHANTSQL;
const db = new Pool({connectionString});

module.exports = db;