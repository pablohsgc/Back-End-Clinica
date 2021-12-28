import Pessoa from "./Pessoa";

export default class Paciente extends Pessoa{
    private peso:Number;
    private altura:Number;
    private tipoSanguineo:String;

    constructor(nome:String,codigo:Number,email:String,telefone:String,cep:String,logradouro:String,bairro:String,cidade:String,estado:String,peso:Number,altura:Number,tipoSanguineo:String){
        super(nome,codigo,email,telefone,cep,logradouro,bairro,cidade,estado)
        this.peso = peso;
        this.altura = altura;
        this.tipoSanguineo = tipoSanguineo;
    }  

    public getPeso(){
        return this.peso;
    }

    public setPeso(peso:Number){
        this.peso = peso;
    }
    
    public getAltura(){
        return this.altura;
    }

    public setAltura(altura:Number){
        this.altura = altura;
    }

    public getTipoSanguineo(){
        return this.tipoSanguineo;
    }

    public setTipoSanguineo(tipoSanguineo:String){
        this.tipoSanguineo = tipoSanguineo;
    }
}