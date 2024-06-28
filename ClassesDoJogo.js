let nome = prompt("Digite o nome do seu heroi: ");
let idade = prompt("Digite a idade do seu heroi: ");
let tipo = prompt("Digite o tipo do seu heroi: ");

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        if(this.tipo === "Guerreiro"){
            return console.log("O " + this.tipo + " atacou usando Espada");
        }
        else if(this.tipo === "Mago"){
            return console.log("O " + this.tipo + " atacou usando Magia");
        }
        else if(this.tipo === "Monge"){
            return console.log("O " + this.tipo + " atacou usando Artes Marciais");
        }
        else {
            return console.log("O " + this.tipo + " atacou usando Shuriken");
        }
    } 
}

const heroi = new Heroi(nome, idade, tipo)
heroi.atacar();