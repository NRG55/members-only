const pool = require('./pool');

const addUser = async (firstName, lastName, username, password) => {    
    const { rows } = await pool.query(`
        INSERT INTO users (first_name, last_name, username, password)
        VALUES ($1, $2, $3, $4)
        RETURNING * ;`,
        [firstName, lastName, username, password]
    );

    console.log(`DATABASE: User ${rows[0].username} added`);
};

const assignMembershipToUser = async (userId) => {    
    const { rows } = await pool.query(`
        UPDATE users
        SET is_member = TRUE
        WHERE id = $1
        RETURNING * ;`,
        [userId]
    );

    console.log(`DATABASE: User with id ${rows[0].id} is updated (is_member: TRUE)`);
};

module.exports = { 
    addUser,
    assignMembershipToUser
};