import Funcionario from "./Funcionario";

export default class Medico extends Funcionario{ //classe medico nao precisa de codigo, deixar CRM maiúsculo
    private especialidade:String;
    private CRM:Number;
    
    constructor(nome:String,codigo:Number,email:String,telefone:String,cep:String,logradouro:String,bairro:String,cidade:String,estado:String,dataContrato:Date,salario:Number,senhaHash:String,especialidade:String,CRM:Number){
        super(nome,codigo,email,telefone,cep,logradouro,bairro,cidade,estado,dataContrato,salario,senhaHash)
        this.especialidade = especialidade;
        this.CRM = CRM;
    }

    public getEspecialidade(){
        return this.especialidade;
    }

    public setEspecialidade(especialidade:String){
        this.especialidade = especialidade;
    }

    public getCRM(){
        return this.CRM;
    }

    public setCRM(CRM:Number){
        this.CRM = CRM;
    }
}