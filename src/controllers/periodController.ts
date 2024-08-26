import { Request, Response } from "express";
import { lookupPeriod } from "../lookupPeriod";

export async function getPeriodInfo(req: Request, res: Response) {
    const period = req.query.period as string;
    if (!period) {
        return res.status(400).json({ error: 'Period is required' });
    }

    try {
        const periodGroup = await lookupPeriod(period);
        if (periodGroup && periodGroup?.length === 0) {
            console.log("period not found for: " + period);
            return res.status(404).json({ error: 'Period not found' });
        }
        res.json(periodGroup);
    } catch (error) {
        console.error('Error fetching period info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}