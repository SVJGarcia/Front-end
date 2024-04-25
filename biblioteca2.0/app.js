// app.js

const express = require('express');
const bodyParser = require('body-parser');
const Biblioteca = require('./biblioteca');

const app = express();
const port = 3000;
const minhaBiblioteca = new Biblioteca();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html');
});

app.post('/adicionar', (req, res) => {
 const titulo = req.body.titulo;
 const autor = req.body.autor;

 const livro = { titulo, autor };
 minhaBiblioteca.adicionarLivro(livro);

 res.redirect('/');
});

app.post('/remover', (req, res) => {
 const indice = req.body.indice - 1;
 minhaBiblioteca.removerLivro(indice);

 res.redirect('/');
});

app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});
   