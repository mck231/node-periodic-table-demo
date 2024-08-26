import { Request, Response } from 'express';
import { lookupElement } from '../lookupElement';

export async function getElementInfo(req: Request, res: Response) {
    const symbol = req.query.symbol as string;
    if (!symbol) {
        return res.status(400).json({ error: 'Element symbol is required' });
    }

    try {
        const element = await lookupElement(symbol);
        console.log("symbol not found for: " + symbol)
        if (!element) {
            return res.status(404).json({ error: 'Element not found' });
        }
        res.json(element);
    } catch (error) {
        console.error('Error fetching element info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}