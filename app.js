// Arquivo principal que importa middlewares e rotas

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = 3000;

// Configuração de sessão
app.use(session({
  secret: 'segredo_super_secreto',
  resave: false,
  saveUninitialized: false
}));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para verificar se o usuário está logado
function verificaLogin(req, res, next) {
  if (req.session.usuarioId) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Rotas
const authRoutes = require('./routes/authRoutes');
const tarefasRoutes = require('./routes/tarefasRoutes');
const responsaveisRoutes = require('./routes/responsaveisRoutes');

app.use('/', authRoutes);
app.use('/tarefas', verificaLogin, tarefasRoutes);
app.use('/responsaveis', verificaLogin, responsaveisRoutes);

// Rota de fallback
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
