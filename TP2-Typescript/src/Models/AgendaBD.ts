const db = require('../db')

class AgendaBD{
    constructor(){

    }

    async agendamentos(){
        const query = 'select * from  PESSOA P join Paciente F on P.codigo=F.codigo';
        
        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }
}

export default new AgendaBD();