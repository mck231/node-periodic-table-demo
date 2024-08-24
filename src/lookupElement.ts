import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function lookupElement(symbol: string) {
    const db = await open({
        filename: 'periodic_table.db',
        driver: sqlite3.Database
    });

    const element = await db.get(
        'SELECT "group", period, atomic_number, atomic_mass, symbol, name FROM elements WHERE Upper(symbol) = ?',
        symbol.toUpperCase()
    );

    await db.close();

    if (!element) {
        console.log(`The element symbol: ${symbol}. Has not been discovered yet.`);
        return;

    }
    console.log(`Element: ${element.name}`);
    console.log(`Symbol: ${element.symbol}`);
    console.log(`Atomic Number: ${element.atomic_number}`);
    console.log(`Atomic Mass: ${element.atomic_mass}`);
    console.log(`Group: ${element.group}`);
    console.log(`Period: ${element.period}`);
}
