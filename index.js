const prompt = require("prompt-sync")();
let ladoBarra = +prompt("Informe o lado da barra em centímetros:");
let pedacos = 1;
while (ladoBarra >= 2) {
  ladoBarra = ladoBarra / 2;
  pedacos *= 4;
}

console.log(`A barra de chocolate foi dividida em: ${pedacos} pedaços.`);
