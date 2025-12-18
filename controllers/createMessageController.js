const { validateMessage } = require('../middlewares/validators/validateMessage');
const { validationResult } = require('express-validator');

const createMessageGet = (req, res) => {
    res.render('forms/message', { data: {} });
};

const createMessagePost = [
    validateMessage,
    (req, res, next) => {           
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
        
        // TODO: finish this POST method
    }
];

module.exports = { createMessageGet, createMessagePost };