import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import Agenda from "../Models/Agenda";
import AgendaBD from "../Models/AgendaBD";
import CadastraConsulta from "../Models/CadastraConsulta";

const agendamentosRoute = Router();

agendamentosRoute.get('/medicos', async (req: Request, res: Response, next: NextFunction) => {
    const agendamentos = await AgendaBD.agendamentos();
    res.send(agendamentos);
})

agendamentosRoute.post('/agendamentos', async (req: Request, res: Response, next: NextFunction) => {
    let { codigo, data, horario, nome, email, telefone, codigoMedico } = req.body;
    let consulta = new Agenda(codigo, data, horario, nome, email, telefone, codigoMedico);
    let retorno = "";
    let cadastraConsulta = new CadastraConsulta();
    try {
        let codigo = await cadastraConsulta.cadastraConsulta(consulta);
        retorno = "Cunsulta de " + nome + " na data " + data + " no horário " + horario + " cadastrada!"
    } catch (erro) {
        console.log(erro);
        retorno = "Consulta não pode ser cadastrada!";
    }
    res.send({ "Mensagem": retorno });
})

export default agendamentosRoute;