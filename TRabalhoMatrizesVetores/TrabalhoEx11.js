const vetor = [1.5, -2.7, 3.8, -4.2, 5.6, -6.1, 7.4, -8.9, 9.2, -10.5];
let qtdNegativos = 0;
let somaPositivos = 0;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
        qtdNegativos++;
    } else {
        somaPositivos += vetor[i];
    }
}

console.log("Quantidade de números negativos:", qtdNegativos);
console.log("Soma dos números positivos:", somaPositivos);
