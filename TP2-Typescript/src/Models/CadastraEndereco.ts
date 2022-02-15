import Endereco from "./Endereco";
import EnderecoBD from "./EnderecoBD";

class CadastraEndereco{
    constructor(){

    }

    async cadastraEndereco(endereco:Endereco){
        try{
            let cepCadastrado = await EnderecoBD.insereEndereco(endereco);
            
            return cepCadastrado;
        }catch(erro){
            
            throw erro;
        }
    }

    verificaValidezEndereco(endereco:Endereco){
        if( endereco.getBairro() === "" ||
            endereco.getCep() === "" ||
            endereco.getCidade() === "" ||
            endereco.getEstado() === "" ||
            endereco.getLogradouro() === "")
            throw "Todos os dados do email devem ser preenchidos!"
    }
}

export default new CadastraEndereco();