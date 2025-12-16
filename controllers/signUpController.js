const { addUser } = require('../db/queries');
const bcrypt = require('bcryptjs');
const { validateSignUp } = require('../middlewares/validators/validateSignUp');
const { validationResult, matchedData } = require('express-validator');

const signUpGet = (req, res) => {
    res.render('forms/sign_up', { data: {} });
};

const signUpPost = [
    validateSignUp,
    async (req, res, next) => {           
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .render('forms/sign_up', 
                    {
                        errors: errors.array(),
                        data: req.body
                    }
                );
        };        

        const { firstName, lastName, username, password } = matchedData(req);

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            await addUser(firstName, lastName, username, hashedPassword);
            res.redirect('/');

        } catch (error) {
            next(error);
        };   
    }
];

module.exports = { signUpGet, signUpPost };