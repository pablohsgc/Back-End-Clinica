const Pessoa = require("./Pessoa");

export default class Funcionario extends Pessoa{ //classe funcionario nao precisa de codigo
    private dataContrato:Date;
    private salario:Number;
    private senhaHash:String;

    constructor(codigo:Number,nome:String,email:String,telefone:String,cep:String,logradouro:String,bairro:String,cidade:String,estado:String,dataContrato:Date,salario:Number,senhaHash:String){
        super(codigo,nome,email,telefone,cep,logradouro,bairro,cidade,estado)
        this.dataContrato = dataContrato;
        this.salario = salario;
        this.senhaHash = senhaHash;
    }

    public getDataContrato(){
        return this.dataContrato
    }

    public setDataContrato(dataContrato:Date){
        this.dataContrato = dataContrato
    }

    public getSalario(){
        return this.salario
    }

    public setSalario(salario:Number){
        this.salario = salario
    }

    public getSenhaHash(){
        return this.senhaHash
    }

    public setSenhaHash(senhaHash:String){
        this.senhaHash = senhaHash
    }
}
