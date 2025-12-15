const pool = require('./pool');

const addUser = async (firstName, lastName, username, password) => {    
    const { rows } = await pool.query(`
        INSERT INTO users (first_name, last_name, username, password)
        VALUES ($1, $2, $3, $4)
        RETURNING * ;`,
        [firstName, lastName, username, password]
    );

    console.log(`${rows[0].username} added to database`);
};

module.exports = { addUser };