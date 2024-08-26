export class ElementSymbolModel {
    group: number;
    period: number;
    atomic_number: number;
    atomic_mass: number;
    symbol: string;
    name: string;
    constructor(group: number, period: number, atomic_number: number, atomic_mass: number, symbol: string, name: string) {
        this.group = group;
        this.period = period;
        this.atomic_number = atomic_number;
        this.atomic_mass = atomic_mass;
        this.symbol = symbol;
        this.name = name;
    }
}