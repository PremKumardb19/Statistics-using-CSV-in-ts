"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFIleReader_1 = require("./CsvFIleReader");
class MatchReader {
    static fromCsv(fileName) {
        return new MatchReader(new CsvFIleReader_1.CsvFileReader(fileName));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((elt) => {
            return [
                (0, utils_1.dateStringToDate)(elt[0]),
                elt[1],
                elt[2],
                parseInt(elt[3]),
                parseInt(elt[4]),
                elt[5], //type assertion this tells ts that the elt[5] will definitely be in MatchResult Enum
                elt[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
