const Pool = require('pg-pool')

//url de conexao fornecida no elephant
const connectionString = 'postgres://pkcracpn:YCJysAYUb7pVqagU7LvAjbK47Gp-wjyA@kesavan.db.elephantsql.com/pkcracpn';
const db = new Pool({connectionString});

module.exports = db;