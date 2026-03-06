const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const controller = require('../controllers/contatoController');

router.use(auth);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

module.exports = router;
