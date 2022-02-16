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
            await this.verificaValidezMedico(medico);
            
            let codigoPessoa = await CadastraFuncionario.cadastraFuncionario(funcionario)
            
            medico.setCodigo(codigoPessoa);
            
            return await MedicoBD.insereMedico(medico);
        }catch(erro){
            
            throw erro
        }
    }

    async verificaValidezMedico(medico:Medico){
        let contemCRMMedico = false;

        try{
            contemCRMMedico = await MedicoBD.contemCRM(medico.getCRM());
        }catch(erro){
            throw erro;
        }

        if(contemCRMMedico) throw "CRM já está cadastrado!";

        if( medico.getCRM() <= 0 ||
            medico.getEspecialidade() === "")
            throw "Dados do médico devem ser preenchidos corretamente!"
    }
}

export default new CadastraMedico();