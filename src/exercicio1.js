//Vetro A com 6 numeros inteiros
const A = [1,0,5,-2,-5,7];

//Soma dos valores das posições A[0], A[1], e A[5]
const soma = A[0] + A[1] + A[5];
console.log("Soma dos valores das posições A[0], A[1] e A[5]:", soma);

//Modificando cada valor na posição 4 (índice 3) para 100
A[3]=100;

//Mostrando cada valor do vetor A, um em cada linha
console.log("\nValores do vetor A:");
A.forEach(valor => console.log(valor));
