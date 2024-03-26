const readline = require('readline');

// Interface para leitura de entrada
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Array para armazenar os valores lidos
const valores = [ ];

// Função para ler os valores
function lerValores(indice) {
	rl.question(`Digite o ${indice + 1}º valor inteiro: `, (valor) => {
    	// Converte o valor para inteiro
    	const valorInteiro = parseInt(valor);
   	 
    	// Verifica se o valor é um número inteiro
    	if (Number.isInteger(valorInteiro)) {
        	// Armazena o valor no array
        	valores.push(valorInteiro);

        	// Se lemos todos os 6 valores, mostra na tela e fecha a interface de leitura
        	if (indice === 5) {
            	console.log("\nValores lidos:");
            	valores.forEach((val, index) => console.log(`${index + 1}º valor: ${val}`));
            	rl.close();
        	} else {
            	// Continua lendo os valores
            	lerValores(indice + 1);const redline = require('redline');

                //Interface para leitura de entrada
                const rl = redline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                
                //Arrey para armazenar os valores lidos
                const valores = [];
                
                //Função para ler os valores
                function lerValores(indice){
                    rl.question('Digite o ${indice +1}°vcalor inteiro:',(valor) =>{
                        //Converter o valor para inteiro
                        const valorInteiro = parseInt(valor);
                
                        //Verifica se o valor é um numero inteiro
                        if(Number.isInteger(valorInteiro)){
                            //Armazena o valor no arrey
                            valores.push(valorInteiro);
                
                            //Se lemos todos os 6 valores, mostra na tela e fecha a interface de leitura
                            if(indice===5){
                                console.log("\nValores lidos:");
                                valores.forEach((val, index)) => console.log('${index}')
                            }
                        }
                    }
                }
        	}
    	} else {
        	// Se não for um número inteiro, pede para digitar novamente
        	console.log("Por favor, digite um valor inteiro válido.");
        	lerValores(indice);
    	}
	});
}

// Inicia a leitura dos valores
lerValores(0);
