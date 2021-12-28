"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacientesRoute_1 = __importDefault(require("./Routes/pacientesRoute"));
const funcionariosRoute_1 = __importDefault(require("./Routes/funcionariosRoute"));
const medicosRoute_1 = __importDefault(require("./Routes/medicosRoute"));
const app = (0, express_1.default)();
const PORT = 3000 || process.env.PORT;
app.get('/', (req, res) => {
    res.send('Backend da aplicação rodando na porta ' + PORT);
});
app.use(pacientesRoute_1.default);
app.use(funcionariosRoute_1.default);
app.use(medicosRoute_1.default);
// Server setup
app.listen(PORT, () => {
    console.log('Teste a aplicação no seu navegador em: \nhttp://localhost:' + PORT);
});
