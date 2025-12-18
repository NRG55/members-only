const { Router } = require('express');
const { createMessageGet, createMessagePost } = require('../controllers/createMessageController');

const router = Router();

router.get('/', createMessageGet);
router.post('/', createMessagePost);

module.exports = router;