// Desafio 1 
// Definir a patente do jogador a partir do XP ganho.
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

console.log("Desafio 1")
console.log("O Herói de "+ nome +" está no nível "+ Patente)
console.log("-----------------------------------------------------------------")

// Desafio 2
// Definir a patente do jogador a partir da quantidade de vitorias e derrotas rankeadas do jogador

let vitorias = 0
let derrotas = 0
let saldoVitorias = 0
let nivel = ""

function gerarVitorias(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    vitorias = parseInt(Math.random() * (max - min) + min)
}

function gerarDerrotas(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    derrotas = parseInt(Math.random() * (max - min) + min)
}

gerarVitorias(1, 200)

gerarDerrotas(1, 50)

function rankeadas(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas
    if (saldoVitorias <= 10 ) {
        nivel = "Ferro"
    } else if(saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = "Lendário"
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal"
    }
}

rankeadas(vitorias, derrotas)

console.log("Desafio 2")
console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel + ".")
console.log("-----------------------------------------------------------------")