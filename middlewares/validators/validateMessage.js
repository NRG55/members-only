const { body } = require('express-validator');

const emptyError = 'cannot be empty.';
const titleLengthError = 'must be between 1 and 32 characters.';
const messageLengthError = 'must be between 1 and 180 characters.';

exports.validateMessage = [
    body('title')
        .trim()
        .notEmpty().withMessage(`Title ${emptyError}`)
        .isLength({ min: 1, max: 32 }).withMessage(`Title ${titleLengthError}`),
    body('message')
        .trim()
        .notEmpty().withMessage(`Message ${emptyError}`)
        .isLength({ min: 1, max: 180 }).withMessage(`Message ${messageLengthError}`), 
];