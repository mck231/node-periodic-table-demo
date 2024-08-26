import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { ElementSymbolModel } from './models/elementSymbolModel';

export async function lookupElement(symbol: string): Promise<ElementSymbolModel | undefined> {
    try {
        const db = await open({
            filename: 'periodic_table.db',
            driver: sqlite3.Database
        });

        const element = await db.get(
            'SELECT "group", period, atomic_number, atomic_mass, symbol, name FROM elements WHERE Upper(symbol) = ?',
            symbol.toUpperCase()
        );
        console.log("element not found for: " + element)

        await db.close();

        if (!element) {
            console.log(`The element symbol: ${symbol}. Has not been discovered yet.`);
            return undefined;
        }
        let foundElement = new ElementSymbolModel(element.group, element.period, element.atomic_number, element.atomic_mass, element.symbol, element.name);
        console.log(`Element found: ${foundElement.name}`);
        return foundElement;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
}