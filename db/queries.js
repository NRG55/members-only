const pool = require('./pool');

/* -------------- USER -------------- */

const addUser = async (firstName, lastName, username, password) => {    
    const { rows } = await pool.query(
        `
            INSERT INTO users (first_name, last_name, username, password)
            VALUES ($1, $2, $3, $4)
            RETURNING * ;
        `, 
        [firstName, lastName, username, password]
    );

    console.log(`DATABASE: User ${rows[0].username} added`);
};

const assignMembership = async (userId) => {    
    const { rows } = await pool.query(
        `
            UPDATE users
            SET is_member = TRUE
            WHERE id = $1
            RETURNING * ;
        `,
        [userId]
    );

    console.log(`DATABASE: User with id ${rows[0].id} is updated (is_member: TRUE)`);
};

const assignAdmin = async (userId) => {    
    const { rows } = await pool.query(
        `
            UPDATE users
            SET is_admin = TRUE
            WHERE id = $1
            RETURNING * ;
        `,
        [userId]
    );

    console.log(`DATABASE: User with id ${rows[0].id} is updated (is_admin: TRUE)`);
};

const getUserByUsername = async (username) => {    
    const { rows } = await pool.query(
        `
            SELECT * FROM users        
            WHERE username = $1;
        `,
        [username]
    );
    
    return rows[0];
};

const getUserById = async (id) => {    
    const { rows } = await pool.query(
        `
            SELECT * FROM users        
            WHERE id = $1;
        `,
        [id]
    );
       
    return rows[0];
};

/* -------------- MESSAGE -------------- */

const addMessage = async (userId, title, message) => {    
    const { rows } = await pool.query(
        `
            INSERT INTO messages (user_id, title, message)
            VALUES ($1, $2, $3)
            RETURNING * ;
        `,
        [userId, title, message]
    );

    console.log(`DATABASE: Message (user id ${rows[0].user_id}) added`);
};

const getAllMessages = async () => {
    const { rows } = await pool.query(
        `
            SELECT messages.id, messages.title, messages.message
            FROM messages            
            ORDER BY messages.created_at DESC;
        `       
    );
       
    return rows;
};

const getAllMessagesWithUsernameAndDate = async () => {
    const { rows } = await pool.query(
        `
            SELECT messages.id, messages.title, messages.message, messages.created_at, users.username 
            FROM messages 
            JOIN users ON messages.user_id = users.id
            ORDER BY messages.created_at DESC;
        `       
    );
       
    return rows;
};

const deleteMessage = async (messageId) => {    
    await pool.query(
        `
            DELETE FROM messages
            WHERE id = $1;
        `,
        [messageId]
    );

    console.log(`DATABASE: Message with id ${messageId}) deleted`);
};

module.exports = { 
    addUser,
    assignMembership,
    assignAdmin,
    getUserByUsername,
    getUserById,
    addMessage,
    getAllMessages,
    getAllMessagesWithUsernameAndDate,
    deleteMessage
};