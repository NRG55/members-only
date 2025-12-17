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

const assignMembership = async (userId) => {    
    const { rows } = await pool.query(`
        UPDATE users
        SET is_member = TRUE
        WHERE id = $1
        RETURNING * ;`,
        [userId]
    );

    console.log(`DATABASE: User with id ${rows[0].id} is updated (is_member: TRUE)`);
};

const getUserByUsername = async (username) => {    
    const { rows } = await pool.query(`
        SELECT * FROM users        
        WHERE username = $1;`,
        [username]
    );
    
    return rows[0];
};

const getUserById = async (id) => {    
    const { rows } = await pool.query(`
        SELECT * FROM users        
        WHERE id = $1;`,
        [id]
    );
       
    return rows[0];
};

module.exports = { 
    addUser,
    assignMembership,
    getUserByUsername,
    getUserById
};