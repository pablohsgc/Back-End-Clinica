import Agenda from "./Agenda";
const db = require('../db')

class AgendaBD {
    constructor() {

    }

    async agendamentos() {
        const query = 'select * from AGENDA';

        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }

    async inserirConsulta(consulta: Agenda) {
        let values = [
            consulta.getCodigo(),
            consulta.getData(),
            consulta.getHorario(),
            consulta.getNome(),
            consulta.getEmail(),
            consulta.getTelefone(),
            consulta.getCodigoMedico(),
        ];
        const query = 'insert into Agenda values ($1,$2,$3,$4,$5,$6,$7) RETURNING codigo';

        try {
            const { rows } = await db.query(query, values);
            return rows[0].codigo;
        } catch (erro) {
            throw erro;
        }
    }

    async agendamentosMedico() {

    }

    async horariosDisponiveis(data: Date) {

    }
}

//Adicionar Métodos do diagrama de classes

export default new AgendaBD();