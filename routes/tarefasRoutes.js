
const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.get('/', tarefasController.listar);
router.post('/', tarefasController.cadastrar);
router.post('/:id/editar', tarefasController.editar);
router.get('/:id/excluir', tarefasController.excluir);

module.exports = router;
