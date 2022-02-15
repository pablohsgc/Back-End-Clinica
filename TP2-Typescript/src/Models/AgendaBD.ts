import { brotliDecompress } from "zlib";
import Agenda from "./Agenda";
const db = require('../db')

class AgendaBD {
    constructor() {

    }

    async agendamentos() {
        try{
            const query = 'select * from AGENDA';

            const result = await db.query(query);

            const rows = result.rows;

            return rows || [];
        
        }catch(erro){
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async inserirConsulta(consulta: Agenda): Promise<Number> {
        let values = [
            consulta.getData(),
            consulta.getHorario(),
            consulta.getNome(),
            consulta.getEmail(),
            consulta.getTelefone(),
            consulta.getCodigoMedico(),
        ];

        const query = 'insert into Agenda (dataConsulta, horario, nome, email, telefone, codigoMedico) values ($1,$2,$3,$4,$5,$6) RETURNING codigo';

        try {
            const { rows } = await db.query(query, values);

            return rows[0].codigo;
        } catch (erro) {
            if((<any>erro).detail)
                throw (<any>erro).detail;
            
            throw erro;
        }
    }

    async agendamentosMedico(codigoMedico: Number, data: Date): Promise<JSON> {
        const values = [data, codigoMedico];
        const query = "select * from agenda a where a.dataconsulta=$1 and a.codigoMedico=$2;";

        try {
            const { rows } = await db.query(query, values);

            return rows;

        } catch (erro) {
            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async horariosDisponiveis(codigoMedico: Number, data: Date): Promise<JSON> {
        const values = [data, codigoMedico];
        const query = "select h.hora from horario h except (select a.horario from agenda a where a.dataconsulta=$1 and a.codigoMedico=$2) ORDER BY hora; ";

        try {
            const { rows } = await db.query(query, values);

            return rows;

        } catch (erro) {

            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }
}

//Adicionar Métodos do diagrama de classes

export default new AgendaBD();