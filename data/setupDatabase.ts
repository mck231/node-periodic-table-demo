import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { readFile } from 'fs/promises';
import path from 'path';

export async function setupDatabase() {
    const db = await open({
        filename: 'periodic_table.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS elements (
            element_id INTEGER PRIMARY KEY AUTOINCREMENT,
            \`group\` TINYINT,
            period TINYINT,
            atomic_number TINYINT NOT NULL,
            atomic_mass DECIMAL(10,8) NOT NULL,
            symbol VARCHAR(2) NOT NULL,
            name VARCHAR(45) NOT NULL
        )
    `);
    // Read and execute the seed-data.sql file
    const seedDataPath = path.join(__dirname, 'seed-data.sql');
    const seedData = await readFile(seedDataPath, 'utf-8');
    await db.exec(seedData);

    console.log('Database setup and seeding complete.');
    await db.close();
}

export async function terminateDatabase() {
    const db = await open({
        filename: 'periodic_table.db',
        driver: sqlite3.Database
    });
    // Drop the existing elements table if it exists
    await db.exec('DROP TABLE IF EXISTS elements');
    await db.close();
    console.log('Database connection closed.');
}
