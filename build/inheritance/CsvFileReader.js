"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: "utf-8"
        })
            .split("\n")
            .map((elt) => {
            return elt.split(',');
        })
            .map(this.mapRow);
        // .map((elt:string[]):matchData=>this.mapRow(elt))
    }
}
exports.CsvFileReader = CsvFileReader;
