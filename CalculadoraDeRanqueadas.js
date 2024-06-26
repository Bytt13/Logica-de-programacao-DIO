let nome = prompt("Digite o nome do seu jogador: ");
let vitorias = prompt("Digite quantas vitórias voce tem: ");
let rank;

function calculadora(vitorias){
    if(vitorias <= 10){
        rank = "Ferro";
    }
    else if(vitorias > 10 && vitorias <= 20){
        rank = "Bronze";
    }
    else if(vitorias > 20 && vitorias <= 50){
        rank = "Prata";
    }
    else if(vitorias > 50 && vitorias <= 80){
        rank = "Ouro";
    }
    else if(vitorias > 80 && vitorias <= 90){
        rank = "Diamante";
    }
    else if(vitorias > 90 && vitorias <= 100){
        rank = "Lendário";
    }
    else {
        rank = "Imortal";
    }

    return rank;
}

console.log("O Herói tem de saldo de " + vitorias + " vitórias e está no nível de " + calculadora(vitorias));