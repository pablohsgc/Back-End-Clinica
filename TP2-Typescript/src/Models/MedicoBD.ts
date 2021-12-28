import Medico from "./Medico";

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

    async insereMedico(medico:Medico){
        let values = [medico.getCodigo(),medico.getEspecialidade(),medico.getCRM()];
        
        const query = 'insert into Medico (codigo,especialidade,crm) values ($1,$2,$3) RETURNING codigo';
        
        try{
            const {rows} = await db.query(query,values);
            
            return rows[0].codigo;
        }catch(erro){
            
            throw erro
        }
    }
}

export default new MedicoBD();