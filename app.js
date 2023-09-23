const express = require('express');
const app = express();
const port = 3000;

// Configuração de template engine
app.set('view engine', 'ejs');

// Configurar o middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static('public'));

// Rota para a página do portfólio
const portfolioController = require('./portfolioController');
app.get('/', portfolioController.getPortfolio);

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
