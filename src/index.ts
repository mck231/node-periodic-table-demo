import { setupDatabase, terminateDatabase } from '../data/setupDatabase';
import { handleMainMenu } from './promptHandler';

async function main() {
    try {
        await setupDatabase();
        await handleMainMenu();
    } catch (error) {
        console.error('Error during setup:', error);
    } finally {
        await terminateDatabase();
    }
}

main();
