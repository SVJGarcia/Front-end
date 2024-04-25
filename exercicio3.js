const readline = require('readline');

// Interface para leitura de entrada
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Função para ler os números reais
function lerNumeros(qtdNumeros, vetor, callback) {
	rl.question(`Digite ${qtdNumeros} números reais separados por espaço: `, (input) => {
    	// Divide a entrada em números individuais
    	const numeros = input.split(' ').map(Number);
   	 
    	// Verifica se a quantidade de números informada é compatível com a entrada
    	if (numeros.length === qtdNumeros && numeros.every(Number.isFinite)) {
        	// Armazena os números no vetor
        	for (let i = 0; i < qtdNumeros; i++) {
            	vetor.push(numeros[i]);
        	}
        	callback();
    	} else {
        	// Se a entrada for inválida, solicita que o usuário digite novamente
        	console.log(`Por favor, digite ${qtdNumeros} números reais válidos.`);
        	lerNumeros(qtdNumeros, vetor, callback);
    	}
	});
}

// Função para calcular o quadrado dos números e imprimir ambos os conjuntos
function calcularQuadradoEImprimir(conjuntoOriginal) {
	const conjuntoQuadrado = conjuntoOriginal.map(num => num * num);

	console.log("Conjunto Original:");
	console.log(conjuntoOriginal.join(', '));

	console.log("\nConjunto com Quadrados:");
	console.log(conjuntoQuadrado.join(', '));

	rl.close();
}

// Vetor para armazenar os números reais
const conjuntoOriginal = [];

// Lê os números reais
lerNumeros(10, conjuntoOriginal, () => {
	// Calcula o quadrado e imprime ambos os conjuntos
	calcularQuadradoEImprimir(conjuntoOriginal);
});
