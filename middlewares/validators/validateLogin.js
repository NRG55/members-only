const { body } = require('express-validator');

const emptyError = 'cannot be empty.';
const lengthError = 'must be between 1 and 32 characters.';
const passwordLengthError = 'must be between 5 and 16 characters.';

exports.validateLogin = [
    body('username')
        .trim()
        .notEmpty().withMessage(`Username ${emptyError}`)
        .isLength({ min: 1, max: 32 }).withMessage(`Last name ${lengthError}`),
    body('password')
        .trim()
        .notEmpty().withMessage(`Password ${emptyError}`)
        .isLength({ min: 5, max: 16 }).withMessage(`Password ${passwordLengthError}`), 
];