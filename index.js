console.log('Hi, welcome to Node for calculator IMC');

let inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'altura',
    message: 'Qual sua altura (incluir .): '
  },
  {
    type: 'input',
    name: 'peso',
    messsage: '\nDigite seu peso em kg(inckuir .): '
  }
]

inquirer.prompt(questions).then(answers => {
  console.log('\nDados obtidos: ');
  console.log(JSON.stringify(answers, null, ' '));
  calcula_imc(answers)

})


function calcula_imc(param) {
  console.log("Vamos calcular IMC - Indíce Massa corporal\n")
  // console.log(typeof (param.altura)); string
  let peso = parseFloat(param.peso);
  let altura = parseFloat(param.altura);
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
