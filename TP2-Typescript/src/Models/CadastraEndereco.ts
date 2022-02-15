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
}

export default new CadastraEndereco();