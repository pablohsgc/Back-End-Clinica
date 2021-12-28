"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Medico extends Funcionario_1.default {
    constructor(codigo, nome, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash, especialidade, CRM) {
        super(codigo, nome, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash);
        this.especialidade = especialidade;
        this.CRM = CRM;
    }
    getCRM() {
        return this.CRM;
    }
    setCRM(CRM) {
        this.CRM = CRM;
    }
}
exports.default = Medico;
