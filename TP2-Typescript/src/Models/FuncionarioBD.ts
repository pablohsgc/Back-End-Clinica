import Funcionario from "./Funcionario";

const db = require('../db')

class FuncionarioBD{
    constructor(){

    }

    async funcionarios(){
        try{
            const query = 'select * from PESSOA P join Funcionario F on P.codigo=F.codigo;';
            
            const result = await db.query(query);

            const rows = result.rows;

            return rows || [];

        }catch(erro){
            throw (<any>erro).detail;
        }
    }

    async insereFuncionario(funcionario:Funcionario){
        let values = [funcionario.getCodigo(),funcionario.getDataContrato(),funcionario.getSalario(),funcionario.getSenhaHash()];
        
        const query = 'insert into Funcionario (codigo,dataContrato,salario,senhaHash) values ($1,$2,$3,$4) RETURNING codigo';
        
        try{
            const {rows} = await db.query(query,values);
            
            return rows[0].codigo;
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async buscaFuncionario(email:String){
        let values = [email];

        const query = 'select * from  PESSOA P join FUNCIONARIO F on P.codigo=F.codigo where P.email=$1';

        try{
            const {rows} = await db.query(query,values);
            
            if(rows.length == 0) 
                throw "Usuario não existe!";
            
            return rows[0];
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }        
    }
}

export default new FuncionarioBD();