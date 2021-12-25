"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, dataNasc) {
        this.nome = nome;
        this.dataNasc = dataNasc;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getDataNasc() {
        return this.dataNasc;
    }
    setDataNasc(dataNasc) {
        this.dataNasc = this.dataNasc;
    }
}
exports.Pessoa = Pessoa;
