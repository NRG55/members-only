const { Router } = require('express');
const { joinTheClubGet, joinTheClubPost } = require('../controllers/joinTheClubController');

const router = Router();

router.get('/', joinTheClubGet);
router.post('/', joinTheClubPost);

module.exports = router;