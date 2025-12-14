const { addUser } = require('../db/queries');
const bcrypt = require('bcryptjs');

const signUpGet = (req, res) => {
    res.render('sign_up');
};

const signUpPost = async (req, res, next) => {
    const { firstName, lastName, userName, password } = req.body;   

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await addUser(firstName, lastName, userName, hashedPassword);
        res.redirect('/');

    } catch (error) {
        next(error);
    };   
};

module.exports = { signUpGet, signUpPost };