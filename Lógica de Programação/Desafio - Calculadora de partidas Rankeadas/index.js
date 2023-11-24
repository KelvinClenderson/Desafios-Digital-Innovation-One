function partidas(vitorias, derrotas) {
    return vitorias - derrotas;
}

let resultado = partidas(103, 1);

let nivel = "";

if (resultado < 10) {
    nivel = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(
    "O herói tem o saldo de " + resultado + " e está no nível " + nivel
);
