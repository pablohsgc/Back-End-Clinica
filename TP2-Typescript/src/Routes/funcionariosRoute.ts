import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import CadastraFuncionario from "../Models/CadastraFuncionario";
import Funcionario from "../Models/Funcionario";
import FuncionarioBD from "../Models/FuncionarioBD";

const funcionariosRoute = Router();

funcionariosRoute.get('/funcionarios', async (req:Request, res:Response,next:NextFunction) =>{
    const funcionarios = await FuncionarioBD.funcionarios();
    res.send(funcionarios);
})

funcionariosRoute.post('/funcionarios', async (req:Request, res:Response,next:NextFunction) =>{
    let {nome,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash} = req.body;
    let funcionario = new Funcionario(nome,0,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash);
    let retorno = "";
    
    try{
        let codigo = await CadastraFuncionario.cadastraFuncionario(funcionario);
        retorno = "Funcionario: " + nome + ", foi cadastrado com o código: " + codigo;
    }catch(erro){
        console.log(erro)
        retorno = "Funcionario não pode ser cadastrado!";
    }

    res.send({"Mensagem":retorno});
})

export default funcionariosRoute;

