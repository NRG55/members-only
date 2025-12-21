module.exports = (req, res, next) => {
    res.locals.path = req.path;
    next();
};