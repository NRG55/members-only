const { Client } = require('pg');
const fs = require('node:fs');
require('dotenv').config();


async function main() {    
    const client = new Client({ connectionString: process.env.NEON_CONNECTION_STRING });

    try {
        console.log("Seeding...");
        const sql = fs.readFileSync('./db/init/init.sql', 'utf8', (error) => console.log(error));

        await client.connect();
        await client.query(sql);

    } catch (error) {
        console.error(error);

    } finally {
        await client.end();
        console.log("done");
    };  
};

main();