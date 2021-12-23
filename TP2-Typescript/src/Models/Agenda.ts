export default class Agenda{
    private codigo:Number;
    private data:Date;
    private horario:String;
    private nome:String;
    private email:String;
    private telefone:String;
    private codigoMedico:Number;

    constructor(codigo:Number,data:Date,horario:String,nome:String,email:String,telefone:String,codigoMedico:Number){
        this.codigo = codigo;
        this.data = data;
        this.horario = horario;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.codigoMedico = codigoMedico;
    }

    public getCodigo(){
        return this.codigo;
    }

    public setCodigo(codigo:Number){
        this.codigo = codigo;
    }

    public getData(){
        return this.data;
    }

    public setData(data:Date){
        this.data = data;
    }

    public getHorario(){
        return this.horario;
    }

    public setHorario(horario:String){
        this.horario = horario;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome:String){
        this.nome = nome;
    }

    public getEmail(){
        return this.email;
    }

    public setEmail(email:String){
        this.email = email;
    }

    public getTelefone(){
        return this.telefone;
    }

    public setTelefone(telefone:String){
        this.telefone = telefone;
    }

    public getCodigoMedico(){
        return this.codigoMedico;
    }

    public setCodigoMedico(codigoMedico:Number){
        this.codigo = codigoMedico;
    }
}