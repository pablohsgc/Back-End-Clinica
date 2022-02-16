import Medico from "./Medico";

const db = require('../db')

class MedicoBD{
    constructor(){

    }

    async medicos(){
        try{
            const query = 'select * from Pessoa P join Medico M on P.codigo=M.codigo join Funcionario F on P.codigo=F.codigo;';
            
            const result = await db.query(query);

            const rows = result.rows;

            return rows || [];
        }catch(erro){

            throw (<any>erro).detail;
        }
    }

    async insereMedico(medico:Medico){
        let values = [medico.getCodigo(),medico.getEspecialidade(),medico.getCRM()];
        
        const query = 'insert into Medico (codigo,especialidade,crm) values ($1,$2,$3) RETURNING codigo';
        
        try{
            const {rows} = await db.query(query,values);
            
            return rows[0].codigo;
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async especialidades(){
        const query = 'select distinct especialidade from medico';
        
        try{
            const {rows} = await db.query(query);
            
            return rows;
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async contemMedico(codigo:Number): Promise<Boolean>{
        const values = [codigo];

        const query = 'select codigo from medico where codigo=$1';
        
        try{
            const {rows} = await db.query(query,values);
            
            if(rows.length > 0){
                return true
            }

            return false;
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async medicosPorEspecialidade(especialidade:String){
        const values = [especialidade];

        const query = 'select * from medico m join pessoa p on m.codigo=p.codigo where especialidade=$1';
        
        try{
            const {rows} = await db.query(query,values);

            return rows;
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async contemCRM(crm:Number){
        const values = [crm];

        const query = 'select * from medico where crm=$1'

        try{
            const {rows} = await db.query(query,values);

            if(rows[0]) return true;

            return false;
        }catch(erro){
            
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }
}

export default new MedicoBD();