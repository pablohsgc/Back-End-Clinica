import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import CadastraPaciente from "../Models/CadastraPaciente";
import Paciente from "../Models/Paciente";
import PacienteBD from "../Models/PacienteBD";
import verificaJWT from "../middleware/verificaJWT";

const pacienteRoute = Router();

pacienteRoute.get('/pacientes', verificaJWT, async (req:Request, res:Response,next:NextFunction) =>{
    let retorno = null;
    
    try{
        retorno = await PacienteBD.pacientes();
    }catch(erro){
        retorno = { "erro" : erro };
    }
    
    res.send(retorno);
})

pacienteRoute.post('/pacientes', verificaJWT, async (req:Request, res:Response,next:NextFunction) => {
    let {nome,email,telefone,cep,logradouro,bairro,cidade,estado,peso,altura,tipoSanguineo} = req.body;
    let paciente = new Paciente(nome,0,email,telefone,cep,logradouro,bairro,cidade,estado,peso,altura,tipoSanguineo);
    let retorno = null;
    
    try{
        let codigo = await CadastraPaciente.cadastraPaciente(paciente);
        retorno = { "mensagem" : "Paciente: " + nome + ", cadastrado com o codigo: " + codigo};
    }catch(erro){
        retorno = {"erro" : "Paciente não pode ser cadastrado! " + erro};
    }

    res.send(retorno);
})

export default pacienteRoute;

