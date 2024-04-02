const readline = require('readline');

// Interface para leitura de entrada
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const valores = [ ];
for(let i=0; i<10; i++){
    rl.question(`Digite o º valor inteiro: ` );
}