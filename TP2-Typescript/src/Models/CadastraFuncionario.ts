import Funcionario from "./Funcionario";
import FuncionarioBD from "./FuncionarioBD";
import Pessoa from "./Pessoa";
import PessoaBD from "./PessoaBD";

class CadastraFuncionario{
    constructor(){

    }

    async cadastraFuncionario(funcionario:Funcionario){
        let pessoa = new Pessoa(
            funcionario.getNome(),
            funcionario.getCodigo(),
            funcionario.getEmail(),
            funcionario.getTelefone(),
            funcionario.getCep(),
            funcionario.getLogradouro(),
            funcionario.getBairro(),
            funcionario.getCidade(),
            funcionario.getEstado()
        ); 
        
        try{
            let codigoPessoa = await PessoaBD.inserePessoa(pessoa);
            
            funcionario.setCodigo(codigoPessoa);
            
            return await FuncionarioBD.insereFuncionario(funcionario);
        }catch(erro){
            
            throw erro;
        }
    }
}

export default new CadastraFuncionario();