"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../db');
class PessoaBD {
    constructor() {
    }
    inserePessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const result = yield db.query(query, values);
            const { rows } = result.rows;
            return rows.codigo;
        });
    }
}
exports.default = new PessoaBD();
