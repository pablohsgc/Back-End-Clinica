import CadastraPessoa from "./CadastraPessoa";
import Funcionario from "./Funcionario";
import FuncionarioBD from "./FuncionarioBD";
import Pessoa from "./Pessoa";


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
            let codigoPessoa = await CadastraPessoa.cadastraPessoa(pessoa);
            
            funcionario.setCodigo(codigoPessoa);
            
            return await FuncionarioBD.insereFuncionario(funcionario);
        }catch(erro){
            
            throw erro;
        }
    }

    verificaValidezFuncionario(funcionario:Funcionario){
        if( funcionario.getSalario() <= 0 ||
            funcionario.getDataContrato().getTime() <= 0 ||
            funcionario.getSenhaHash() === "")
            throw "Dados do funcionario devem ser preenchidos corretamente!"
    }
}

export default new CadastraFuncionario();