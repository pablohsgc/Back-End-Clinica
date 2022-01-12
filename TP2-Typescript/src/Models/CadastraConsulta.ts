import AgendaBD from "./AgendaBD";
import Agenda from "./Agenda";

export default class CadastraConsulta {
    constructor() {

    }

    async cadastraConsulta(consulta: Agenda) {
        try {
            return await AgendaBD.inserirConsulta(consulta);
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