import { setupDatabase, terminateDatabase } from '../data/setupDatabase';
import express, { Request, Response } from 'express';
import path from "path";
import { getElementInfo } from "./controllers/elementController";
import {getPeriodInfo} from "./controllers/periodController";

async function main() {
    try {
        await setupDatabase();
        const app = express();
        const PORT = process.env.PORT || 3000;

        // Middleware to serve static files
        app.use(express.static(path.join(__dirname, 'public')));

        // Endpoint to handle element lookup
        app.get('/api/element', getElementInfo);
        app.get('/api/period', getPeriodInfo)

        // All other routes should serve your main HTML file
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });

        // Start the server
        const server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

        // Gracefully terminate the database on app close
        process.on('SIGINT', async () => {
            console.log('SIGINT signal received: closing HTTP server');
            server.close(async () => {
                console.log('HTTP server closed');
                await terminateDatabase();
                console.log('Database connection closed');
                process.exit(0);
            });
        });

    } catch (error) {
        console.error('Error during setup:', error);
    }
}

main();