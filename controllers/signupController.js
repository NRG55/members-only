const { addUser, getUserByUsername } = require('../db/queries');
const bcrypt = require('bcryptjs');
const { validateSignup } = require('../middlewares/validators/validateSignup');
const { validationResult, matchedData } = require('express-validator');

const signupGet = (req, res) => {
    res.render('forms/sign_up', { data: {} });
};

const signupPost = [
    validateSignup,
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
            // auto login after registration
            const user = await getUserByUsername(username);

            req.login(user, (error) => {
                if (error) {
                    return next(error);
                };

                res.redirect('/');               
            });          

        } catch (error) {
            next(error);
        };   
    }
];

module.exports = { signupGet, signupPost };