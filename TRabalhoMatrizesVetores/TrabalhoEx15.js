const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vetor = [];

function lerValor(posicao) {
  rl.question(`Digite o ${posicao}º valor: `, (valor) => {
    vetor.push(parseInt(valor));
    if (posicao < 20) {
      lerValor(posicao + 1);
    } else {
      const vetorSemRepeticao = [...new Set(vetor)];
      console.log('Vetor sem elementos repetidos:', vetorSemRepeticao);
      rl.close();
    }
  });
}

lerValor(1);
