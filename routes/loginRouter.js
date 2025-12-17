const { Router } = require('express');
const { loginGet, loginPost } = require('../controllers/loginController');

const router = Router();

router.get('/', loginGet);
router.post('/', loginPost);

module.exports = router;