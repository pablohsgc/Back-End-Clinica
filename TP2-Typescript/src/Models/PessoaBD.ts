import Pessoa from "./Pessoa";

const db = require('../db')

class PessoaBD {
    constructor() {

    }

    async inserePessoa(pessoa: Pessoa) {
        let values = [
            pessoa.getNome(),
            pessoa.getEmail(),
            pessoa.getTelefone(),
            pessoa.getCep(),
            pessoa.getLogradouro(),
            pessoa.getBairro(),
            pessoa.getCidade(),
            pessoa.getEstado()
        ];

        const query = 'insert into Pessoa (nome,email,telefone,cep,logradouro,bairro,cidade,estado) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING codigo';

        try {
            const { rows } = await db.query(query, values);

            return rows[0].codigo;
        } catch (erro) {

            throw erro
        }
    }
}

export default new PessoaBD();