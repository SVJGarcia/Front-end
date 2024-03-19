const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const queryObject = url.parse(req.url, true).query;
	const name = queryObject.name || 'mundo';
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(`Olá, ${name}! Este é um servidor Node.js.`);
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
