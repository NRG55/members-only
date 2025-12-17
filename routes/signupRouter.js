const { Router } = require('express');
const { signupGet, signupPost } = require('../controllers/signupController');

const router = Router();

router.get('/', signupGet);
router.post('/', signupPost);

module.exports = router;