
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rotas de autenticação
router.get('/login', (req, res) => res.sendFile('login.html', { root: './public/pages' }));
router.get('/register', (req, res) => res.sendFile('register.html', { root: './public/pages' }));

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/logout', authController.logout);

module.exports = router;
