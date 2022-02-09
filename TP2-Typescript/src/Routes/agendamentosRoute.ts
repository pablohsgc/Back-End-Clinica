import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import Agenda from "../Models/Agenda";
import AgendaBD from "../Models/AgendaBD";
import CadastraConsulta from "../Models/CadastraConsulta";
import verificaJWT from "../middleware/verificaJWT";

const agendamentosRoute = Router();

agendamentosRoute.get('/agendamentos', verificaJWT, async (req: Request, res: Response, next: NextFunction) => {
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
        retorno = "Consulta de " + nome + " na data " + data + " às " + horario + " horas cadastrada!"
    } catch (erro) {
        console.log(erro);
        retorno = "Consulta não pode ser cadastrada!";
    }
    res.send({ "mensagem": retorno });
})

agendamentosRoute.post('/agendamentos/consultasMarcadas', verificaJWT, async (req: Request, res: Response, next: NextFunction) => {
    let { codigo, data } = req.body;
    let retorno;
    try {
        retorno = await AgendaBD.agendamentosMedico(codigo, data);
    } catch (erro) {
        retorno = { "Erro ao retornar os dados!": erro }
    }

    res.send(retorno);
})

agendamentosRoute.post('/agendamentos/horariosLivres', verificaJWT, async (req: Request, res: Response, next: NextFunction) => {
    let { codigoMedico, data } = req.body;
    let retorno;
    try {
        retorno = await AgendaBD.horariosDisponiveis(codigoMedico, data);
    } catch (erro) {
        retorno = { "Erro ao retornar os dados!": erro }
    }

    res.send(retorno);
})

export default agendamentosRoute;