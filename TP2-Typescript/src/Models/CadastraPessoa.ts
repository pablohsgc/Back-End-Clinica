import Pessoa from "./Pessoa";
import PessoaBD from "./PessoaBD";

class CadastraPessoa{
    constructor(){

    }

    async cadastraPessoa(pessoa:Pessoa){
        try{
            this.verificaValidezPessoa(pessoa);

            let codigoPessoa = await PessoaBD.inserePessoa(pessoa);
            
            return codigoPessoa;
        }catch(erro){

            throw erro
        }
    }

    verificaValidezPessoa(pessoa:Pessoa){
        if( pessoa.getNome() === "" ||
            pessoa.getEmail() === "" ||
            pessoa.getCep() === "" ||
            pessoa.getBairro() === "" ||
            pessoa.getEstado() === "" ||
            pessoa.getLogradouro() === "" ||
            pessoa.getTelefone() === "" )
            throw "Dados pessoais não devem estar vazios!" 
    }
}

export default new CadastraPessoa();