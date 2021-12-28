"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, codigo, email, telefone, cep, logradouro, bairro, cidade, estado) {
        this.nome = nome;
        this.codigo = codigo;
        this.email = email;
        this.telefone = telefone;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getLogradouro() {
        return this.logradouro;
    }
    setLogradouro(logradouro) {
        this.logradouro = logradouro;
    }
    getBairro() {
        return this.bairro;
    }
    setBairro(bairro) {
        this.bairro = bairro;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
}
exports.default = Pessoa;
