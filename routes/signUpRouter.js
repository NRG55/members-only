const { Router } = require('express');
const { signUpGet, signUpPost } = require('../controllers/signUpController');

const router = Router();

router.get('/', signUpGet);
router.post('/', signUpPost);

module.exports = router;