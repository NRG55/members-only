const pool = require('./pool');

const addUser = async (firstName, lastName, userName, password) => {    
    const { rows } = await pool.query(`
        INSERT INTO users (first_name, last_name, user_name, password)
        VALUES ($1, $2, $3, $4)
        RETURNING * ;`,
        [firstName, lastName, userName, password]
    );

    console.log(`${rows[0].user_name} added to database`);
};

module.exports = { addUser };