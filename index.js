const readline = require('readline-sync');

function calcularFatorial () {
    let n = readline.questionInt("Deseja fatorial de qual número?\n");
    let numero = n;
    let fatorial  = 1;
    while (n > 0) {
        fatorial *= n;
        n -= 1;
    }
    return console.log(`\nO fatorial de ${numero} é igual ${fatorial}`)   
}

calcularFatorial()
