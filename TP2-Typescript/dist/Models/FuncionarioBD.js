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
class FuncionarioBD {
    constructor() {
    }
    funcionarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'select * from PESSOA P join Funcionario F on P.codigo=F.codigo;';
            const result = yield db.query(query);
            const rows = result.rows;
            return rows || [];
        });
    }
}
exports.default = new FuncionarioBD();
