const { addMessage } = require('../db/queries');
const { validateMessage } = require('../middlewares/validators/validateMessage');
const { validationResult, matchedData } = require('express-validator');

const createMessageGet = (req, res) => {
    res.render('forms/message', { data: {} });
};

const createMessagePost = [
    validateMessage,
    async (req, res, next) => {           
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .render('forms/message', 
                    {
                        errors: errors.array(),
                        data: req.body
                    }
                );
        };        
      
        const { title, message } = matchedData(req);

        try {
            await addMessage(req.user.id, title, message);
            res.redirect('/');

        } catch (error) {
            next(error);
        };        
    }
];

module.exports = { createMessageGet, createMessagePost };