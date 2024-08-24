import readline from 'readline';
import { lookupElement } from './lookupElement';
import { lookupPeriod } from './lookupPeriod';

export async function handleMainMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askQuestion = (query: string): Promise<string> => {
        return new Promise(resolve => rl.question(query, resolve));
    };

    let continueLoop = true;

    while (continueLoop) {
        const choice = await askQuestion(
            'What information regarding the Periodic table do you want to look up? Symbols for Elements info or Elements in Periods? (Symbol/Period) '
        );

        if (choice.toLowerCase() === 'symbol' || choice.toLowerCase() === 's') {
            await handleSymbolLookup(rl, askQuestion);
        } else if (choice.toLowerCase() === 'period' || choice.toLowerCase() === 'p') {
            await handlePeriodLookup(rl, askQuestion);
        } else {
            console.log('Invalid input. Exiting.');
            continueLoop = false;
        }
    }

    rl.close();
}

async function handleSymbolLookup(rl: readline.Interface, askQuestion: (query: string) => Promise<string>) {
    while (true) {
        const symbol = await askQuestion('Enter element symbol (or type "exit" to exit): ');
        if (symbol.toLowerCase() === 'exit') {
            return;
        }
        await lookupElement(symbol);

        const another = await askQuestion('Do you want to look up another element? (yes/no): ');
        if (another.toLowerCase() !== 'yes' && another.toLowerCase() !== 'y') {
            return;
        }
    }
}

async function handlePeriodLookup(rl: readline.Interface, askQuestion: (query: string) => Promise<string>) {
    while (true) {
        const period = await askQuestion('Enter period number (1-7) (or type "exit" to exit): ');
        if (period.toLowerCase() === 'exit') {
            return;
        }
        await lookupPeriod(period);

        const another = await askQuestion('Do you want to look up another period? (yes/no): ');
        if (another.toLowerCase() !== 'yes' && another.toLowerCase() !== 'y') {
            return;
        }
    }
}
