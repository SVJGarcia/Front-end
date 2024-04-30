const fs = require('fs');

const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

// Convertendo o objeto para uma string JSON
const jsonPessoa = JSON.stringify(pessoa);

// Escrevendo o JSON em um arquivo
fs.writeFileSync('pessoa.json', jsonPessoa);

console.log('Arquivo pessoa.json criado com sucesso.');
