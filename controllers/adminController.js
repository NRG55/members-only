const { assignAdmin } = require('../db/queries');
const { validateAdmin } = require('../middlewares/validators/validateAdmin');
const { validationResult } = require('express-validator');

const adminGet = (req, res) => {
    res.render('forms/admin');
};

const adminPost = [
    validateAdmin,
    async (req, res, next) => {           
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).render('forms/admin', { errors: errors.array() });
        };        

        try {            
            await assignAdmin(req.user.id);
            res.redirect('/');

        } catch (error) {
            next(error);
        };   
    }
];

module.exports = { adminGet, adminPost };