const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Olá, mundo! Este é um servidor Node.js.');
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
