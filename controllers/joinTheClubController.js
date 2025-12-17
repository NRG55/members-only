const { assignMembership } = require('../db/queries');
const { validateJoinTheClub } = require('../middlewares/validators/validateJoinTheClub');
const { validationResult } = require('express-validator');

const joinTheClubGet = (req, res) => {
    res.render('forms/member');
};

const joinTheClubPost = [
    validateJoinTheClub,
    async (req, res, next) => {           
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).render('forms/member', { errors: errors.array() });
        };        

        try {            
            await assignMembership(req.user.id);
            res.redirect('/');

        } catch (error) {
            next(error);
        };   
    }
];

module.exports = { joinTheClubGet, joinTheClubPost };