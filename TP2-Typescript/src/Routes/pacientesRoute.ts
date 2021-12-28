import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import CadastraPaciente from "../Models/CadastraPaciente";
import Paciente from "../Models/Paciente";
import PacienteBD from "../Models/PacienteBD";

const pacienteRoute = Router();

pacienteRoute.get('/pacientes', async (req:Request, res:Response,next:NextFunction) =>{
    const pacientes = await PacienteBD.pacientes();
    res.send(pacientes);
})

pacienteRoute.post('/pacientes/cadastraPaciente', async (req:Request, res:Response,next:NextFunction) =>{
    let {nome,email,telefone,cep,logradouro,bairro,cidade,estado,peso,altura,tipoSanguineo} = req.body;
    let paciente = new Paciente(nome,0,email,telefone,cep,logradouro,bairro,cidade,estado,peso,altura,tipoSanguineo);
    let retorno = "";
    
    try{
        retorno = await CadastraPaciente.cadastraPaciente(paciente);
    }catch(erro){
        retorno = "Paciente não pode ser cadastrado!";
    }

    res.send({"Mensagem":retorno});
})

export default pacienteRoute;

