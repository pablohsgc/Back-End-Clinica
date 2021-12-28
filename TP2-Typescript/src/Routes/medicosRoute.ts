import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import MedicoBD from "../Models/MedicoBD";

const medicosRoute = Router();

medicosRoute.get('/medicos', async (req:Request, res:Response,next:NextFunction) =>{
    const funcionarios = await MedicoBD.medicos();
    res.send(funcionarios);
})

export default medicosRoute;

