const db = require('../db')

class AgendaBD{
    constructor(){

    }

    async agendamentos(){
        const query = 'select * from AGENDA';
        
        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }
}

export default new AgendaBD();