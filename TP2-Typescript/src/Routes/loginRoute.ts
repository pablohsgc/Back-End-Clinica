import { Router } from "express";
import { Request,Response,NextFunction } from "express";
import FuncionarioBD from "../Models/FuncionarioBD";
import MedicoBD from "../Models/MedicoBD";

const jwt = require('jsonwebtoken');

const loginRoute = Router();

loginRoute.post('/login', async (req:Request, res:Response,next:NextFunction) =>{
    let {email,senha} = req.body;
    let retorno = null;
    
    try{
        let funcionario = await FuncionarioBD.buscaFuncionario(email);
    
        if(funcionario.senhahash == senha){
            let ehMedico = await MedicoBD.contemMedico(funcionario.codigo);
            let codigo = funcionario.codigo;
            let token = jwt.sign({codigo},process.env.SECRET,{});

            retorno = {
                "auth":true,
                "nome":funcionario.nome,
                "token":token,
                "medico":ehMedico
            }
        }

        if(retorno == null) throw "Senha incorreta!";

    }catch(erro){
        
        retorno = {auth:false,"erro":"" + erro};
    }

    res.send(retorno);
})

export default loginRoute;