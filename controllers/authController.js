
const usuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
    const { email, senha } = req.body;
    usuarioModel.findByEmail(email, (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).send('Usuário não encontrado');
        }
        const usuario = results[0];
        if (bcrypt.compareSync(senha, usuario.senha)) {
            req.session.usuarioId = usuario.id;
            res.redirect('/tarefas');
        } else {
            res.status(401).send('Senha incorreta');
        }
    });
};

exports.register = (req, res) => {
    const { nome, email, senha } = req.body;
    usuarioModel.register(nome, email, senha, (err) => {
        if (err) {
            return res.status(500).send('Erro ao cadastrar usuário');
        }
        res.redirect('/login');
    });
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};
