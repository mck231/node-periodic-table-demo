"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupPeriod = lookupPeriod;
const sqlite_1 = require("sqlite");
const sqlite3_1 = __importDefault(require("sqlite3"));
function lookupPeriod(periodNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, sqlite_1.open)({
            filename: 'periodic_table.db',
            driver: sqlite3_1.default.Database
        });
        const periodGroup = yield db.all('SELECT name FROM elements WHERE period = ? ORDER BY atomic_mass', periodNumber);
        yield db.close();
        if (periodGroup.length === 0) {
            console.log(`The period number: ${periodNumber}. Does not exist in the current Periodic Table.`);
            return;
        }
        console.log(`Elements in period ${periodNumber}:`);
        periodGroup.forEach((el) => {
            console.log(el.name);
        });
    });
}
