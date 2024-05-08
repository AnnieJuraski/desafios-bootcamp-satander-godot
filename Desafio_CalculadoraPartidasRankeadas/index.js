let saldo, nivel;

function calcularNivelESaldo(vitorias, derrotas){    

    saldo = vitorias - derrotas;


    if (saldo <= 10){
        nivel = "Ferro";
    }else if(saldo >= 11 && saldo <=20){
        nivel = "Bronze";
    }else if(saldo >= 21 && saldo <=50){
        nivel = "Prata";
    }else if (saldo >= 51 && saldo <=80){
        nivel = "Ouro";
    }else if (saldo >= 81 && saldo <=90){
        nivel = "Diamante";
    }else if (saldo >= 91 && saldo <=100){
        nivel = "Lendário";
    }else if (saldo > 100){
        nivel = "Imortal";
    }

}


console.log("\n\nn##############################################\n")
console.log("Testando com 50 vitórias e 15 derrotas \n")

//Vitorias deve ser passado em primeiro e derrotas em seguida;
calcularNivelESaldo(50,15);
console.log(`O Herói tem de saldo de ${saldo} vitórias e está no nível de ${nivel}`);


console.log("\n\nn##############################################\n")
console.log("Testando com 10 vitórias e 15 derrotas \n")

calcularNivelESaldo(10,15);
console.log(`O Herói tem de saldo de ${saldo} vitórias e está no nível de ${nivel}`);

console.log("\n\nn##############################################\n")
console.log("Testando com 120 vitórias e 10 derrotas \n")

calcularNivelESaldo(120,15);
console.log(`O Herói tem de saldo de ${saldo} vitórias e está no nível ${nivel}`);









