const { body } = require('express-validator');
require("dotenv").config();

const emptyError = 'cannot be empty.';

exports.validateAdmin = [    
    body('passcode')
        .trim()
        .notEmpty().withMessage(`Passcode ${emptyError}`)        
        .custom((value) => {
                    return value === process.env.ADMIN_PASSCODE;          
                }).withMessage('Wrong passcode.'),
];