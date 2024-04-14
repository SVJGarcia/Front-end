const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valores = [];

rl.question('Digite o 1º valor: ', (valor1) => {
  valores.push(parseFloat(valor1));
  rl.question('Digite o 2º valor: ', (valor2) => {
    valores.push(parseFloat(valor2));
    rl.question('Digite o 3º valor: ', (valor3) => {
      valores.push(parseFloat(valor3));
      rl.question('Digite o 4º valor: ', (valor4) => {
        valores.push(parseFloat(valor4));
        rl.question('Digite o 5º valor: ', (valor5) => {
          valores.push(parseFloat(valor5));

          const maior = Math.max(...valores);
          const menor = Math.min(...valores);
          const posicaoMaior = valores.indexOf(maior);
          const posicaoMenor = valores.indexOf(menor);

          console.log('Valores:', valores);
          console.log('Posição do maior valor:', posicaoMaior);
          console.log('Posição do menor valor:', posicaoMenor);

          rl.close();
        });
      });
    });
  });
});
