import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;
for (let match of reader.data) {
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
