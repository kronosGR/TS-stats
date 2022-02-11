"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvReader_1 = require("./CsvReader");
const reader = new CsvReader_1.CsvReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1].trim() === 'Man United' && match[5].trim() === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2].trim() === 'Man United' && match[5].trim() === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
