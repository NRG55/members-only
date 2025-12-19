const { Router } = require('express');
const { createMessageGet, 
        createMessagePost,
        deleteMessageGet } = require('../controllers/messageController');

const router = Router();

router.get('/create', createMessageGet);
router.post('/create', createMessagePost);
router.get('/delete/:messageId', deleteMessageGet);

module.exports = router;