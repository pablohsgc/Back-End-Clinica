import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import CadastraFuncionario from "../Models/CadastraFuncionario";
import Funcionario from "../Models/Funcionario";
import FuncionarioBD from "../Models/FuncionarioBD";
import verificaJWT from "../middleware/verificaJWT";

const funcionariosRoute = Router();

funcionariosRoute.get('/funcionarios', verificaJWT, async (req:Request, res:Response,next:NextFunction) =>{
    let retorno = null;
    
    try{
        retorno = await FuncionarioBD.funcionarios();
        
    }catch(erro){
        retorno = {"erro" : erro};
    }

    res.send(retorno);
})

funcionariosRoute.post('/funcionarios', verificaJWT, async (req:Request, res:Response,next:NextFunction) =>{
    let {nome,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash} = req.body;
    let funcionario = new Funcionario(nome,0,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash);
    let retorno = null;
    
    try{
        let codigo = await CadastraFuncionario.cadastraFuncionario(funcionario);

        retorno = { "mensagem": "Funcionario: " + nome + ", foi cadastrado com o código: " + codigo};
    }catch(erro){
       
        retorno = { "erro" : "Funcionario não pode ser cadastrado!\n" + erro};
    }

    res.send(retorno);
})

export default funcionariosRoute;

