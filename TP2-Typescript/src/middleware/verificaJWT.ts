import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');

export default function verificaJWT(req: Request, res: Response, next: NextFunction){
    var token = req.headers['bearer'];
    
    if (!token) 
        return res.status(401).send({ 
            auth: false,
            erro: 'Não existe token no cabeçalho da requisição!' 
        });
    
    jwt.verify(token, process.env.SECRET, function(err:Error, decoded:JSON) {
      if (err) 
        return res.status(500).send({
            auth: false,
            erro: 'Falha ao autenticar o token!' 
        });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.body.codigo = (<any>decoded).codigo;
      next();
    });
}