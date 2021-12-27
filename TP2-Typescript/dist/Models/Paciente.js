"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Paciente extends Pessoa_1.default {
    constructor(nome, codigo, email, telefone, cep, logradouro, bairro, cidade, estado, peso, altura, tipoSanguineo) {
        super(nome, codigo, email, telefone, cep, logradouro, bairro, cidade, estado);
        this.peso = peso;
        this.altura = altura;
        this.tipoSanguineo = tipoSanguineo;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    getTipoSanguineo() {
        return this.tipoSanguineo;
    }
    setTipoSanguineo(tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }
}
exports.Paciente = Paciente;
