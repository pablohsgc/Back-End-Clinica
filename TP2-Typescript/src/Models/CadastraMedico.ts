import CadastraFuncionario from "./CadastraFuncionario";
import Funcionario from "./Funcionario";
import Medico from "./Medico";
import MedicoBD from "./MedicoBD";

class CadastraMedico{
    constructor(){

    }

    async cadastraMedico(medico:Medico){
        let funcionario = new Funcionario(
            medico.getNome(),
            medico.getCodigo(),
            medico.getEmail(),
            medico.getTelefone(),
            medico.getCep(),
            medico.getLogradouro(),
            medico.getBairro(),
            medico.getCidade(),
            medico.getEstado(),
            medico.getDataContrato(),
            medico.getSalario(),
            medico.getSenhaHash()
        ); 
        
        try{
            let codigoPessoa = await CadastraFuncionario.cadastraFuncionario(funcionario)
            
            medico.setCodigo(codigoPessoa);
            
            return await MedicoBD.insereMedico(medico);
        }catch(erro){
            
            throw erro
        }
    }
}

export default new CadastraMedico();