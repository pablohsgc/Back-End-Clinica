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
const PacienteBD_1 = __importDefault(require("./PacienteBD"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const PessoaBD_1 = __importDefault(require("./PessoaBD"));
class CadastraPaciente {
    constructor() {
    }
    cadastraPaciente(paciente) {
        return __awaiter(this, void 0, void 0, function* () {
            let pessoa = new Pessoa_1.default(paciente.getNome(), paciente.getCodigo(), paciente.getEmail(), paciente.getTelefone(), paciente.getCep(), paciente.getLogradouro(), paciente.getBairro(), paciente.getCidade(), paciente.getEstado());
            try {
                let codigoPessoa = yield PessoaBD_1.default.inserePessoa(pessoa);
                console.log("Codigo de pessoa inserida", codigoPessoa);
                paciente.setCodigo(codigoPessoa);
                return yield PacienteBD_1.default.inserePaciente(paciente);
            }
            catch (erro) {
                throw erro;
            }
        });
    }
}
exports.default = new CadastraPaciente();
