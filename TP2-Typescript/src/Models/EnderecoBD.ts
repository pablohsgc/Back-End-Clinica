import Endereco from "./Endereco";
import Pessoa from "./Pessoa";

const db = require('../db')

class EnderecoBD {
    constructor() {

    }

    async enderecos(){
        const query = 'select * from endereco';

        try {
            const { rows } = await db.query(query);

            return rows;
        } catch (erro) {

            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }

    async buscaEndereco(cep:String): Promise<JSON> {
        const values = [cep];

        const query = 'select * from endereco where cep=$1';

        try {
            const { rows } = await db.query(query, values);

            if(!rows[0]) throw "Não existe endereço cadastrado neste cep!";

            return rows[0];
        } catch (erro) {

            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        } 
    }

    async insereEndereco(endereco:Endereco): Promise<String> {
        let values = [
            endereco.getCep(),
            endereco.getLogradouro(),
            endereco.getBairro(),
            endereco.getCidade(),
            endereco.getEstado()
        ];

        const query = 'insert into Endereco (cep,logradouro,bairro,cidade,estado) values ($1,$2,$3,$4,$5) RETURNING cep';

        try {
            const { rows } = await db.query(query, values);

            return rows[0].cep;
        } catch (erro) {

            if((<any>erro).detail)
                throw (<any>erro).detail;
        
            throw erro;
        }
    }
}

export default new EnderecoBD();