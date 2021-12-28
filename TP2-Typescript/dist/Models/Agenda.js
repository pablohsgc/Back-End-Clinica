"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    constructor(codigo, data, horario, nome, email, telefone, codigoMedico) {
        this.codigo = codigo;
        this.data = data;
        this.horario = horario;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.codigoMedico = codigoMedico;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getHorario() {
        return this.horario;
    }
    setHorario(horario) {
        this.horario = horario;
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
    getCodigoMedico() {
        return this.codigoMedico;
    }
    setCodigoMedico(codigoMedico) {
        this.codigo = codigoMedico;
    }
}
exports.default = Agenda;
