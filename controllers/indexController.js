const { getAllMessages, getAllMessagesWithUsernameAndDate } = require('../db/queries');

const indexGet = async (req, res, next) => {
    try {
        const messages = 
            req.user && req.user.is_member
            ? await getAllMessagesWithUsernameAndDate()
            : await getAllMessages();

        res.render("index", { messages: messages });

    } catch (error) {
        next(error)
    };    
};

module.exports = indexGet;