let Patente
let XP
let nome = "Cris"

function gerarXp(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    XP = parseInt(Math.random() * (max - min) + min)
}

gerarXp(1, 10000)

if (XP <= 1000) {
    Patente = "Ferro"
} else if(XP > 1001 && XP <= 2000){
    Patente = "Bronze"
} else if (XP > 2001 && XP <= 5000) {
    Patente = "Prata"
} else if (XP > 5001 && XP <= 7000) {
    Patente = "Ouro"
} else if (XP > 7001 && XP <= 8000) {
    Patente = "Platina"
}else if (XP > 8001 && XP <= 9000) {
    Patente = "Ascendente"
}else if (XP > 9001 && XP < 10000) {
    Patente = "Imortal"
}else if (XP <= 10000) {
    Patente = "Radiante"
}


console.log("O Herói de "+ nome +" está no nível "+ Patente)