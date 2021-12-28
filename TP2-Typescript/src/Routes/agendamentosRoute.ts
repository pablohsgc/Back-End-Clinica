import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import AgendaBD from "../Models/AgendaBD";

const agendamentosRoute = Router();

agendamentosRoute.get('/medicos', async (req:Request, res:Response,next:NextFunction) =>{
    const agendamentos = await AgendaBD.agendamentos();
    res.send(agendamentos);
})

export default agendamentosRoute;