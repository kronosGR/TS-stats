import { CsvReader } from "./CsvReader";

const reader = new CsvReader('football.csv');
reader.read()

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1].trim() === 'Man United' && match[5].trim() === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2].trim() === 'Man United' && match[5].trim() === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
