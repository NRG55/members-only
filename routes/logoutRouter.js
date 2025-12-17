const { Router } = require('express');
const logoutGet = require('../controllers/logoutController');

const router = Router();

router.get('/', logoutGet);

module.exports = router;