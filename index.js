const readline = require('readline-sync');

function calcula_imc() {
  console.log("Vamos calcular IMC - Indíce Massa corporal\n")
  let peso = readline.questionFloat('\nDigite seu peso em Kg(se necessário use .)');
  let altura = readline.questionFloat('\nDigite altura em metros,(se necessário use .)');
  let imc = 0;
  imc = peso / (altura*altura)
  return console.log(`O seu IMC é: ${imc.toFixed(2)}`)
}

calcula_imc()
