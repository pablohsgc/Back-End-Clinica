export default class Pessoa{
    private codigo:Number;
    private nome:String;
    private email:String;
    private telefone:String;
    private cep:String;
    private logradouro:String;
    private bairro:String;
    private cidade:String;
    private estado:String;

    constructor(nome:String,codigo:Number,email:String,telefone:String,cep:String,logradouro:String,bairro:String,cidade:String,estado:String){
        this.nome = nome;
        this.codigo = codigo 
        this.email = email;
        this.telefone = telefone;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    public getCodigo(){
        return this.codigo;
    }

    public setCodigo(codigo:Number){
        this.codigo = codigo;
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

    public getCep(){
        return this.cep;
    }

    public setCep(cep:String){
        this.cep = cep;
    }

    public getLogradouro(){
        return this.logradouro;
    }

    public setLogradouro(logradouro:String){
        this.logradouro = logradouro;
    }

    public getBairro(){
        return this.bairro;
    }

    public setBairro(bairro:String){
        this.bairro = bairro;
    }

    public getCidade(){
        return this.cidade;
    }

    public setCidade(cidade:String){
        this.cidade = cidade;
    }

    public getEstado(){
        return this.estado;
    }

    public setEstado(estado:String){
        this.estado = estado;
    }
}