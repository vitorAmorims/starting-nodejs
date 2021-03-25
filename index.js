
const readline = require('readline-sync');

function sequenciaFibonacci() {
  console.log('Calcular sequência de Fibonacci\n')
  let numero = readline.questionInt('\nDigite o número: ')
  let anterior = 0;
  let atual = 1;
  let proximo = 1;
  let contador = 1;
  let total = 0
  while(contador <= numero) {
    console.log(proximo);
    total += proximo;
    proximo = atual + anterior;
    anterior = atual
    atual = proximo;
    contador++;
  }
  return console.log(` \nO valor total da sequência é: ${total}`)
}

sequenciaFibonacci()
