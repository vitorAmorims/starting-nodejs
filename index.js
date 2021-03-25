const readline = require('readline-sync');

function calcula_imc() {
  console.log("Vamos calcular IMC - Indíce Massa corporal\n")
  let peso = readline.questionFloat('\nDigite seu peso em Kg(se necessário use .)');
  let altura = readline.questionFloat('\nDigite altura em metros,(se necessário use .)');
  let imc = 0;
  imc = peso / (altura*altura);
  
  if (imc < 18.5) {
    console.log('\nAbaixo do peso (magreza)')
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log('\nPeso normal')
  } else if (imc >= 25.0 && imc <= 29.9) {
    console.log('\nAcima do peso (sobrepeso)')
  } else if (imc >= 30.0 && imc <= 34.9) {
    console.log('\nObesidade grau I')
  } else if (imc >= 35.0 && imc <= 39.9) {
    console.log('\nObesidade grau II')
  } else {
    console.log('\nObesidade graus III e IV')
  }
  return console.log(`\nO seu IMC é: ${imc.toFixed(2)}`)
}

calcula_imc()
