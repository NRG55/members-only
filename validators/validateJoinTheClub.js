const { body } = require('express-validator');
require("dotenv").config();

const emptyError = 'cannot be empty.';

exports.validateJoinTheClub = [    
    body('passcode')
        .trim()
        .notEmpty().withMessage(`Passcode ${emptyError}`)        
        .custom((value) => {
                    return value === process.env.MEMBERSHIP_PASSCODE;          
                }).withMessage('Wrong passcode.'),
];