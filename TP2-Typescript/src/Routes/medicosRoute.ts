import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import CadastraMedico from "../Models/CadastraMedico";
import Medico from "../Models/Medico";
import MedicoBD from "../Models/MedicoBD";

const medicosRoute = Router();

medicosRoute.get('/medicos', async (req:Request, res:Response,next:NextFunction) =>{
    const funcionarios = await MedicoBD.medicos();
    res.send(funcionarios);
})

medicosRoute.post('/medicos', async (req:Request, res:Response,next:NextFunction) =>{
    let {nome,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash,especialidade,crm} = req.body;
    let funcionario = new Medico(nome,0,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash,especialidade,crm);
    let retorno = "";
    
    try{
        let codigo = await CadastraMedico.cadastraMedico(funcionario);
        retorno = "Médico: " + nome + ", foi cadastrado com o código: " + codigo;
    }catch(erro){
        retorno = "Médico não pode ser cadastrado!";
    }

    res.send({"Mensagem":retorno});
})


export default medicosRoute;

