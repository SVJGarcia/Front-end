const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vetor = [];

function lerValor(posicao) {
  rl.question(`Digite o ${posicao}º valor: `, (valor) => {
    vetor.push(parseFloat(valor));
    if (posicao < 10) {
      lerValor(posicao + 1);
    } else {
      const valoresRepetidos = vetor.filter((valor, index) => vetor.indexOf(valor) !== index);
      if (valoresRepetidos.length > 0) {
        console.log('Valores repetidos:', valoresRepetidos);
      } else {
        console.log('Não há valores repetidos.');
      }
      rl.close();
    }
  });
}

lerValor(1);
