import AgendaBD from "./AgendaBD";
import Agenda from "./Agenda";

export default class CadastraConsulta {
    constructor() {

    }

    async cadastraConsulta(consulta: Agenda) {
        try {
            this.verificaValidezConsulta(consulta);
            
            return await AgendaBD.inserirConsulta(consulta);
        } catch (erro) {
            throw erro;
        }
    }

    verificaValidezConsulta(consulta:Agenda){
        if( consulta.getNome() === "" ||
            consulta.getData().getTime() <= 0 ||
            consulta.getEmail() === "" ||
            consulta.getTelefone() === "" ||
            (consulta.getHorario() < 7 || consulta.getHorario() > 17 || consulta.getHorario() <= 0))
            throw "Os dados do agendamento devem ser preenchidos corretamente!"
    }

}