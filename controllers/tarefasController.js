
const tarefaModel = require('../models/tarefaModel');

exports.listar = (req, res) => {
    tarefaModel.findAll((err, results) => {
        if (err) return res.status(500).send('Erro ao listar tarefas');
        res.json(results);
    });
};

exports.cadastrar = (req, res) => {
    const tarefa = req.body;
    tarefaModel.create(tarefa, (err) => {
        if (err) return res.status(500).send('Erro ao cadastrar tarefa');
        res.redirect('/tarefas');
    });
};

exports.editar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    tarefaModel.update(id, dados, (err) => {
        if (err) return res.status(500).send('Erro ao editar tarefa');
        res.redirect('/tarefas');
    });
};

exports.excluir = (req, res) => {
    const id = req.params.id;
    tarefaModel.delete(id, (err) => {
        if (err) return res.status(500).send('Erro ao excluir tarefa');
        res.redirect('/tarefas');
    });
};
