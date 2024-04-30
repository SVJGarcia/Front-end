const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vetor = [];

function lerVetor() {
  rl.question('Digite 5 números reais, separados por espaço: ', (input) => {
    vetor = input.split(' ').map(parseFloat);
    lerCodigo();
  });
}

function lerCodigo() {
  rl.question('Digite um código (0 para finalizar, 1 para mostrar na ordem direta, 2 para mostrar na ordem inversa): ', (codigo) => {
    codigo = parseInt(codigo);
    switch (codigo) {
      case 0:
        rl.close();
        break;
      case 1:
        console.log('Vetor na ordem direta:', vetor);
        lerVetor();
        break;
      case 2:
        console.log('Vetor na ordem inversa:', vetor.reverse());
        lerVetor();
        break;
      default:
        console.log('Código inválido.');
        lerCodigo();
        break;
    }
  });
}

lerVetor();
