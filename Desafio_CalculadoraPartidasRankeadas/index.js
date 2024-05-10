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


function checarNiveis(saldos) {
    console.log("\n\n##############################################\n");
    for (let i = 0; i < saldos.length; i++) {
        let [vitorias, derrotas] = saldos[i];
        calcularNivelESaldo(vitorias, derrotas);
        console.log(`O Herói tem um saldo de ${saldo} vitórias e está no nível ${nivel}`);
    }
}

let saldosDiferentes = [
    [50, 15],
    [25, 19],
    [124, 11],
    [18, 32]
];

checarNiveis(saldosDiferentes);









