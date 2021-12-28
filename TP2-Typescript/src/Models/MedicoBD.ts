const db = require('../db')

class MedicoBD{
    constructor(){

    }

    async medicos(){
        const query = 'select * from Pessoa P join Medico M on P.codigo=M.codigo join Funcionario F on P.codigo=F.codigo;';
        
        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }
}

export default new MedicoBD();