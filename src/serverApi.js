const http = require('http');

const users = [
	{ id: 1, name: 'João' },
	{ id: 2, name: 'Maria' },
	{ id: 3, name: 'Pedro' },
	{ id: 4, name: 'Amanda corna'},
	{ id: 5, name: 'Tiago viado'},
	{ id: 6, name: 'Garcia lindo'},
];

const server = http.createServer((req, res) => {
	if (req.url === '/users' && req.method === 'GET') {
    	res.writeHead(200, {'Content-Type': 'application/json'});
    	res.end(JSON.stringify(users));
	} else {
    	res.writeHead(404, {'Content-Type': 'text/plain'});
    	res.end('Endpoint não encontrado.');
	}
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
