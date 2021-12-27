import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import FuncionarioBD from "../Models/FuncionarioBD";

const funcionariosRoute = Router();

funcionariosRoute.get('/funcionarios', async (req:Request, res:Response,next:NextFunction) =>{
    const funcionarios = await FuncionarioBD.funcionarios();
    res.send(funcionarios);
})

export default funcionariosRoute;

