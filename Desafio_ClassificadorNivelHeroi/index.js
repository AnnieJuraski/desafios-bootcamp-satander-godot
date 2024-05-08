class Heroi{
    #nome;
    #experiencia = 0;

    constructor(nome){
        this.#nome = nome;        
    }

    get getNome(){
        return this.#nome;
    }

    set setNome(value){
        this.#nome = value;
    }

    get getExp(){
        return this.#experiencia;
    }

    gainExp(){
        this.#experiencia += 300;
    }

    loseExp(){
        if(this.#experiencia <= 400){
            this.#experiencia = 0;
        }
        else{
            this.#experiencia -= 400;
        }
    }


    getElo(){
        const xp = this.#experiencia;

        if(xp<= 1000){
            return this.NivelXP[1];
        }else if(xp >= 1001 && xp <= 2000) {
            return this.NivelXP[2];
        }else if(xp >= 2001 && xp <= 5000) {
            return this.NivelXP[3];
        }else if(xp >= 5001 && xp <= 7000) {
            return this.NivelXP[4];
        }else if(xp >= 7001 && xp <= 8000) {
            return this.NivelXP[5];
        }else if(xp >= 8001 && xp <= 9000) {
            return this.NivelXP[6];
        }else if(xp >= 9001 && xp <= 1000) {
            return this.NivelXP[7]
        }else {
            return this.NivelXP[8]
        }
    }

    NivelXP = {
        1: "Ferro",
        2: "Bronze",
        3: "Prata",
        4: "Ouro",
        5: "Platina",
        6: "Ascendente",
        7: "Imortal",
        8: "Radiante"
      };
    
}



let novoHeroi = new Heroi("Link");
novoHeroi.setNome = "Mario"; 


//Nas linhas abaixo simulo um número de partidas ganhas e perdiddas


let vitorias = 55;
let derrotas = 20; 


for (let i = 0; i <= vitorias; i++){
    novoHeroi.gainExp();
}

for (let i = 0; i <= derrotas; i++) {
    novoHeroi.loseExp();
}


console.log(`O Herói de nome ${novoHeroi.getNome} 
está no nível de ${novoHeroi.getElo()}`)






