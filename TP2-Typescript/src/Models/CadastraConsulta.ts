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