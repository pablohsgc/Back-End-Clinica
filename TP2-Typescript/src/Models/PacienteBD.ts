const db = require('../db')

class PacienteBD{
    constructor(){

    }

    async pacientes(){
        const query = 'select * from  PESSOA P join Paciente F on P.codigo=F.codigo';
        
        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }
}

export default new PacienteBD();