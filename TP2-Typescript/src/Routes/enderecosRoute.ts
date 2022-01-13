import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import Endereco from "../Models/Endereco";
import EnderecoBD from "../Models/EnderecoBD";
import CadastraEndereco from "../Models/CadastraEndereco";

const enderecosRoute = Router();

enderecosRoute.get('/enderecos', async (req: Request, res: Response, next: NextFunction) => {
    const enderecos = await EnderecoBD.enderecos();
    res.send(enderecos);
});

enderecosRoute.get('/enderecos/:cep', async (req: Request, res: Response, next: NextFunction) => {
    const cep = req.params.cep;
    let retorno = null;

    try {
        retorno = await EnderecoBD.buscaEndereco(cep);
    } catch (erro) {
        retorno = { "Erro": erro.detail }
    }

    res.send(retorno);
});

enderecosRoute.post('/enderecos', async (req: Request, res: Response, next: NextFunction) => {
    let { cep, logradouro, bairro, cidade, estado } = req.body;
    let endereco = new Endereco(cep, logradouro, bairro, cidade, estado);
    let retorno = "";

    try {
        let cepCadastrado = await CadastraEndereco.cadastraEndereco(endereco);
        retorno = "O endereço do cep: " + cepCadastrado + ", foi cadastrado!";
    } catch (erro) {
        retorno = "O endereço não pode ser cadastrado!";
    }

    res.send({ "Mensagem": retorno });
});


export default enderecosRoute;

