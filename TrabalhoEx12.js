const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valores = [];
let soma = 0;

rl.question('Digite o 1º valor: ', (valor1) => {
  valores.push(parseFloat(valor1));
  soma += valores[0];
  rl.question('Digite o 2º valor: ', (valor2) => {
    valores.push(parseFloat(valor2));
    soma += valores[1];
    rl.question('Digite o 3º valor: ', (valor3) => {
      valores.push(parseFloat(valor3));
      soma += valores[2];
      rl.question('Digite o 4º valor: ', (valor4) => {
        valores.push(parseFloat(valor4));
        soma += valores[3];
        rl.question('Digite o 5º valor: ', (valor5) => {
          valores.push(parseFloat(valor5));
          soma += valores[4];

          const maior = Math.max(...valores);
          const menor = Math.min(...valores);
          const media = soma / valores.length;

          console.log('Valores:', valores);
          console.log('Maior valor:', maior);
          console.log('Menor valor:', menor);
          console.log('Média dos valores:', media);

          rl.close();
        });
      });
    });
  });
});
