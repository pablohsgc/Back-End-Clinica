const db = require('../db')

class FuncionarioBD{
    constructor(){

    }

    async funcionarios(){
        const query = 'select * from PESSOA P join Funcionario F on P.codigo=F.codigo;';
        
        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }
}

export default new FuncionarioBD();