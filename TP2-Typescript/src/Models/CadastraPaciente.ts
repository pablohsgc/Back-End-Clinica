import CadastraPessoa from "./CadastraPessoa";
import Paciente from "./Paciente";
import PacienteBD from "./PacienteBD";
import Pessoa from "./Pessoa";

class CadastraPaciente{
    constructor(){

    }

    async cadastraPaciente(paciente:Paciente){
        let pessoa = new Pessoa(
            paciente.getNome(),
            paciente.getCodigo(),
            paciente.getEmail(),
            paciente.getTelefone(),
            paciente.getCep(),
            paciente.getLogradouro(),
            paciente.getBairro(),
            paciente.getCidade(),
            paciente.getEstado()
        ); 
        
        try{
            this.verificaValidezPaciente(paciente);
            
            let codigoPessoa = await CadastraPessoa.cadastraPessoa(pessoa);
            
            paciente.setCodigo(codigoPessoa);

            return await PacienteBD.inserePaciente(paciente);
        }catch(erro){
            
            throw erro
        }
    }

    verificaValidezPaciente(paciente:Paciente){
        if( paciente.getAltura() <= 0 ||
            paciente.getPeso() <= 0 ||
            paciente.getTipoSanguineo() === "")
            throw "Dados do paciente devem ser preenchidos corretamente!";
    }
}

export default new CadastraPaciente();