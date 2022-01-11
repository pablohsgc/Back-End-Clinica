export default class Endereco{
    private cep:String;
    private logradouro:String;
    private bairro:String;
    private cidade:String;
    private estado:String;

    constructor(cep:String,logradouro:String,bairro:String,cidade:String,estado:String){
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
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