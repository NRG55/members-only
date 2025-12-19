const { Router } = require('express');
const { adminGet, adminPost } = require('../controllers/adminController');

const router = Router();

router.get('/', adminGet);
router.post('/', adminPost);

module.exports = router;