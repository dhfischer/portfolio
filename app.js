const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Configuração de template engine (use o que preferir, EJS ou Pug, por exemplo)
app.set('view engine', 'ejs');

// Configurar o middleware para servir arquivos estáticos na pasta 'public'
app.use(express.static('public'));

// Lê o arquivo JSON de projetos
const projectsData = JSON.parse(fs.readFileSync('projects.json', 'utf8'));

// Lê o arquivo JSON de informações "Sobre"
const aboutData = JSON.parse(fs.readFileSync('about.json', 'utf8'));

// Lê o arquivo JSON de informações "Habilidades"
const skillsData = JSON.parse(fs.readFileSync('skills.json', 'utf8'));

// Lê o arquivo JSON de informações "Contato"
const contactsData = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));

// Lê o arquivo JSON de informações "Modal"
const projectsModalsData = JSON.parse(fs.readFileSync('projectsModals.json', 'utf8'));

// Rota para a página do portfólio
app.get('/', (req, res) => {
  res.render('portfolio', { projects: projectsData, about: aboutData, skills: skillsData, contacts: contactsData, projectsModals: projectsModalsData});
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
