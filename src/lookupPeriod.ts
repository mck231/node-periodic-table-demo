import {open} from "sqlite";
import sqlite3 from "sqlite3";

export async function lookupPeriod(periodNumber: string) {
    const db = await open({
        filename: 'periodic_table.db',
        driver: sqlite3.Database
    });

    const periodGroup = await db.all(
        'SELECT name FROM elements WHERE period = ? ORDER BY atomic_mass',
        periodNumber
    );

    await db.close();

    if (periodGroup.length === 0) {
        console.log(`The period number: ${periodNumber}. Does not exist in the current Periodic Table.`);
        return;
    }
    console.log(`Elements in period ${periodNumber}:`);
    periodGroup.forEach((el: { name: string }) => {
        console.log(el.name);
    });

}