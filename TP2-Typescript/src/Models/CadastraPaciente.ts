import Paciente from "./Paciente";
import PacienteBD from "./PacienteBD";
import Pessoa from "./Pessoa";
import PessoaBD from "./PessoaBD";

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
            let codigoPessoa = await PessoaBD.inserePessoa(pessoa);
            
            paciente.setCodigo(codigoPessoa);

            return await PacienteBD.inserePaciente(paciente);
        }catch(erro){
            
            throw erro
        }
    }
}

export default new CadastraPaciente();