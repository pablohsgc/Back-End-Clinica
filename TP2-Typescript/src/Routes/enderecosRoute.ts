import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import Endereco from "../Models/Endereco";
import EnderecoBD from "../Models/EnderecoBD";
import CadastraEndereco from "../Models/CadastraEndereco";

const enderecosRoute = Router();

enderecosRoute.get('/enderecos', async (req: Request, res: Response, next: NextFunction) => {
    let retorno = null;

    try{
        retorno = await EnderecoBD.enderecos();
    }catch(erro){
        retorno = {"erro" : erro};
    }

    res.send(retorno);
});

enderecosRoute.get('/enderecos/:cep', async (req: Request, res: Response, next: NextFunction) => {
    const cep = req.params.cep;
    let retorno = null;

    try {
        retorno = await EnderecoBD.buscaEndereco(cep);
    } catch (erro) {
        retorno = { "erro": erro }
    }

    res.send(retorno);
});

enderecosRoute.post('/enderecos', async (req: Request, res: Response, next: NextFunction) => {
    let { cep, logradouro, bairro, cidade, estado } = req.body;
    let endereco = new Endereco(cep, logradouro, bairro, cidade, estado);
    let retorno = null;

    try {
        let cepCadastrado = await CadastraEndereco.cadastraEndereco(endereco);
        retorno = {"mensagem":"O endereço do cep: " + cepCadastrado + ", foi cadastrado!"};
    } catch (erro) {
        retorno = { erro: "O endereço não pode ser cadastrado!" + erro};
    }

    res.send(retorno);
});


export default enderecosRoute;

