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
class PacienteBD {
    constructor() {
    }
    pacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'select * from  PESSOA P join Paciente F on P.codigo=F.codigo';
            const result = yield db.query(query);
            const rows = result.rows;
            return rows || [];
        });
    }
    inserePaciente(paciente) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [paciente.getCodigo(), paciente.getAltura(), paciente.getTipoSanguineo(), paciente.getPeso()];
            console.log(values);
            const query = 'insert into Paciente (codigo,altura,tipoSanguineo,peso) values ($1,$2,$3,$4);';
            try {
                const result = yield db.query(query, values);
                const { rows } = result.rows;
                console.log("Paciente inserido");
                return `Paciente:${paciente.getNome()}, cadastrado na base de dados!`;
            }
            catch (erro) {
                throw erro;
            }
        });
    }
}
exports.default = new PacienteBD();
