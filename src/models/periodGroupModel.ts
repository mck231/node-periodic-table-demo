export class PeriodGroupModel {
    names: string[] = [];
    constructor(names: string[]) {
        this.names = names
    }
    addName(name: string) {
        this.names.push(name);
    }
}