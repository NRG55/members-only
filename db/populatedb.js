const { Client } = require('pg');
require('dotenv').config();

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        first_name VARCHAR (32),
        last_name VARCHAR (32),
        user_name VARCHAR (32),
        password VARCHAR (64),
        is_member BOOLEAN DEFAULT false    
    );
`;

const createMessagesTable = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,     
        user_id INTEGER NOT NULL,
        title VARCHAR (100),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP         
    );
`;

const client = new Client({ connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`, 
    // ssl: { rejectUnauthorized: false }
});

async function resetTables() {
    await client.query("DROP TABLE IF EXISTS users, messages;");
    console.log("Tables dropped");
};

async function createTables() {
    await client.query(createUsersTable);
    await client.query(createMessagesTable);    
    console.log("Tables are created");
};

async function main() {
    console.log("Seeding...");
    try {
        await client.connect();
        await resetTables();     
        await createTables();

    } catch (err) {
        console.error(err);

    } finally {
        await client.end();
        console.log("done");
    };  
};

main();