import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import CadastraMedico from "../Models/CadastraMedico";
import Medico from "../Models/Medico";
import MedicoBD from "../Models/MedicoBD";
import verificaJWT from "../middleware/verificaJWT";

const medicosRoute = Router();

medicosRoute.get('/medicos', async (req: Request, res: Response, next: NextFunction) => {
    let retorno = null;
    
    try{
        retorno = await MedicoBD.medicos();
    }catch(erro){
        retorno = {"erro": erro};
    }
    
    
    res.send(retorno);
})

medicosRoute.post('/medicos', verificaJWT, async (req: Request, res: Response, next: NextFunction) => {
    let { nome, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash, especialidade, crm } = req.body;
    
    let funcionario = new Medico(nome, 0, email, telefone, cep, logradouro, bairro, cidade, estado, dataContrato, salario, senhaHash, especialidade, crm);
    let retorno = null;

    try {
        let codigo = await CadastraMedico.cadastraMedico(funcionario);
        retorno = {"mensagem" : "Médico: " + nome + ", foi cadastrado com o código: " + codigo};
    } catch (erro) {
        retorno = {"erro" : "Médico não pode ser cadastrado! " + erro};
    }

    res.send(retorno);
})

medicosRoute.get('/medicos/especialidades', async (req: Request, res: Response, next: NextFunction) => {
    let retorno = null;

    try{
        retorno = await MedicoBD.especialidades();
       
    }catch(erro){
        retorno = {"erro": erro}
    }

    res.send(retorno);
})

medicosRoute.get('/medicos/especialista/:especialidade', async (req: Request, res: Response, next: NextFunction) => {
    let retorno = null;

    try{
        const especialidade = req.params.especialidade;
        retorno = await MedicoBD.medicosPorEspecialidade(especialidade);

    }catch(erro){
        retorno = {"erro" : erro}
    }
    
    res.send(retorno);
})

medicosRoute.get('/medicos/especialista/', async (req: Request, res: Response, next: NextFunction) => {
    res.send({"erro":"É necessário informar uma especialidade!"});
})

export default medicosRoute;

