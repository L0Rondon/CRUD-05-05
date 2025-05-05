
const responsavelModel = require('../models/responsavelModel');

exports.listar = (req, res) => {
    responsavelModel.findAll((err, results) => {
        if (err) return res.status(500).send('Erro ao listar responsáveis');
        res.json(results);
    });
};

exports.cadastrar = (req, res) => {
    const responsavel = req.body;
    responsavelModel.create(responsavel, (err) => {
        if (err) return res.status(500).send('Erro ao cadastrar responsável');
        res.redirect('/responsaveis');
    });
};

exports.editar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    responsavelModel.update(id, dados, (err) => {
        if (err) return res.status(500).send('Erro ao editar responsável');
        res.redirect('/responsaveis');
    });
};

exports.excluir = (req, res) => {
    const id = req.params.id;
    responsavelModel.delete(id, (err) => {
        if (err) return res.status(500).send('Erro ao excluir responsável');
        res.redirect('/responsaveis');
    });
};
