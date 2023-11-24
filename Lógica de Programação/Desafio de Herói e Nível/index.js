let nome = "Satoru Gojo";
let xp = 10.002;

let nivel = "";
if (xp < 1.0) {
    nivel = "Ferro";
} else if (xp >= 1.001 && xp <= 2.0) {
    nivel = "Bronze";
} else if (xp >= 2.001 && xp <= 5.0) {
    nivel = "Prata";
} else if (xp >= 5.001 && xp <= 7.0) {
    nivel = "Ouro";
} else if (xp >= 7.001 && xp <= 8.0) {
    nivel = "Platina";
} else if (xp >= 8.001 && xp <= 9.0) {
    nivel = "Ascendente";
} else if (xp >= 9.001 && xp <= 10.0) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);
