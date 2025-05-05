
const express = require('express');
const router = express.Router();
const responsaveisController = require('../controllers/responsaveisController');

router.get('/', responsaveisController.listar);
router.post('/', responsaveisController.cadastrar);
router.post('/:id/editar', responsaveisController.editar);
router.get('/:id/excluir', responsaveisController.excluir);

module.exports = router;
