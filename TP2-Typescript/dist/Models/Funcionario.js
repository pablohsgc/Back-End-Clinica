"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa = require("./Pessoa");
class Funcionario extends Pessoa {
    constructor(codigo, nome, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash) {
        super(codigo, nome, email, telefone, cep, logradouro, bairro, cidade, estado);
        this.dataContrato = dataContrato;
        this.salario = salario;
        this.senhaHash = senhaHash;
    }
    getDataContrato() {
        return this.dataContrato;
    }
    setDataContrato(dataContrato) {
        this.dataContrato = dataContrato;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    getSenhaHash() {
        return this.senhaHash;
    }
    setSenhaHash(senhaHash) {
        this.senhaHash = senhaHash;
    }
}
exports.default = Funcionario;
