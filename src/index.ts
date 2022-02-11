import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1].trim() === 'Man United' && match[5].trim() === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (
    match[2].trim() === 'Man United' &&
    match[5].trim() === MatchResult.AwayWin
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
