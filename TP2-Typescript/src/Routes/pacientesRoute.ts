import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import PacienteBD from "../Models/PacienteBD";

const pacienteRoute = Router();

pacienteRoute.get('/pacientes', async (req:Request, res:Response,next:NextFunction) =>{
    const pacientes = await PacienteBD.pacientes();
    res.send(pacientes);
})

export default pacienteRoute;

