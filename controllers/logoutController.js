module.exports = (req, res) => {
    req.logout((error) => {
        if (error) {
            return next(error);
        };

        res.redirect('/');
    });
};

