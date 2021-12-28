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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CadastraPaciente_1 = __importDefault(require("../Models/CadastraPaciente"));
const Paciente_1 = __importDefault(require("../Models/Paciente"));
const PacienteBD_1 = __importDefault(require("../Models/PacienteBD"));
const pacienteRoute = (0, express_1.Router)();
pacienteRoute.get('/pacientes', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const pacientes = yield PacienteBD_1.default.pacientes();
    res.send(pacientes);
}));
pacienteRoute.post('/pacientes/cadastraPaciente', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { nome, email, telefone, cep, logradouro, bairro, cidade, estado, peso, altura, tipoSanguineo } = req.body;
    let paciente = new Paciente_1.default(nome, 0, email, telefone, cep, logradouro, bairro, cidade, estado, peso, altura, tipoSanguineo);
    let retorno = "";
    yield CadastraPaciente_1.default.cadastraPaciente(paciente);
    /*try{
         retorno = await CadastraPaciente.cadastraPaciente(paciente);
     }catch(erro){
         retorno = "Paciente não pode ser cadastrado";
         console.log(erro);
     }*/
    res.send({ "Mensagem": retorno });
}));
exports.default = pacienteRoute;
