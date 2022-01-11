import AgendaBD from "./AgendaBD";
import Agenda from "./Agenda";

export default class CadastraConsulta {
    constructor() {

    }

    async cadastraConsulta(consulta: Agenda) {
        let agenda = new Agenda(
            consulta.getCodigo(),
            consulta.getData(),
            consulta.getHorario(),
            consulta.getNome(),
            consulta.getEmail(),
            consulta.getTelefone(),
            consulta.getCodigoMedico(),
        );

        try {

            return await AgendaBD.inserirConsulta(agenda);

        } catch (erro) {

            throw erro;
        }
    }

}


/*
    codigo integer primary key,
    dataConsulta date not null,
    horario varchar(5) not null,
    nome varchar(50) not null,
    email varchar(30),
    telefone varchar(20),
    codigoMedico numeric(11),
    FOREIGN KEY (codigo) REFERENCES Medico (codigo)
*/