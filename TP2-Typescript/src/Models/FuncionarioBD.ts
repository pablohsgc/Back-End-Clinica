import Funcionario from "./Funcionario";

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

    async insereFuncionario(funcionario:Funcionario){
        let values = [funcionario.getCodigo(),funcionario.getDataContrato(),funcionario.getSalario(),funcionario.getSenhaHash()];
        
        const query = 'insert into Funcionario (codigo,dataContrato,salario,senhaHash) values ($1,$2,$3,$4) RETURNING codigo';
        
        try{
            const {rows} = await db.query(query,values);
            
            return rows[0].codigo;
        }catch(erro){
            
            throw erro
        }
    }
}

export default new FuncionarioBD();