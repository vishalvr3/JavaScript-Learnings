////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
const totalNumberOfCompetition = 3;
const minimumScore = 100;

// scores of all three games
const competition1_dolphinScore = 96;
const competition2_dolphinScore = 108;
const competition3_dolphinScore = 89;

const competition1_koalaScore = 88;
const competition2_koalaScore = 91;
const competition3_koalaScore = 110;

//calculating average score
const averageScoreDolphin = Number(
  (competition1_dolphinScore +
    competition2_dolphinScore +
    competition3_dolphinScore) /
    totalNumberOfCompetition
);
const averageScoreKoala = Number(
  (competition1_koalaScore +
    competition2_koalaScore +
    competition3_koalaScore) /
    totalNumberOfCompetition
);
console.log(averageScoreDolphin, averageScoreKoala);
// Logic
if (
  averageScoreDolphin > averageScoreKoala &&
  averageScoreDolphin >= minimumScore
) {
  console.log(`Dolphins win the trophy 🏆`);
} else if (
  averageScoreDolphin < averageScoreKoala &&
  averageScoreKoala >= minimumScore
) {
  console.log(`Koalas win the trophy 🏆`);
} else if (
  averageScoreDolphin === averageScoreKoala &&
  averageScoreDolphin >= minimumScore &&
  averageScoreKoala >= minimumScore
) {
  console.log(`Both win the trophy!`);
} else {
  console.log(`No one wins the trophy 😭`);
}
*/

/*********************************************************
 ************  BELOW TRIED SECOND TIME *******************
 *** it's solution different than the above solution******
 *********************************************************/

// // TEST DATA:
// const AverageScoreTeamDolphin = (96 + 108 + 89) / 3;
// const AverageScoreTeamKoala = (88 + 91 + 110) / 3;
// console.log(AverageScoreTeamDolphin, AverageScoreTeamKoala);

// if (AverageScoreTeamDolphin > AverageScoreTeamKoala) {
//   console.log(`Team Dolphin Wins 🏆`);
// } else if (AverageScoreTeamDolphin < AverageScoreTeamKoala) {
//   console.log(`Team Koala Wins 🏆`);
// } else {
//   console.log(`Both Team Wins the trophy 🏆🏆`);
// }

// // TEST DATA BONUS: 1
// const AverageScoreTeamDolphin = (97 + 112 + 101) / 3;
// const AverageScoreTeamKoala = (109 + 95 + 123) / 3;
// const minimumScore = 100;

// console.log(AverageScoreTeamDolphin, AverageScoreTeamKoala);

// if (
//   AverageScoreTeamDolphin > AverageScoreTeamKoala &&
//   AverageScoreTeamDolphin >= minimumScore
// ) {
//   console.log(`Team Dolphin Wins 🏆`);
// } else if (
//   AverageScoreTeamDolphin < AverageScoreTeamKoala &&
//   AverageScoreTeamKoala >= minimumScore
// ) {
//   console.log(`Team Koala Wins 🏆`);
// } else if (AverageScoreTeamDolphin === AverageScoreTeamKoala) {
//   console.log(`Both Team Wins the trophy 🏆🏆`);
// }

// TEST DATA BONUS: 2
const AverageScoreTeamDolphin = (97 + 112 + 80) / 3;
const AverageScoreTeamKoala = (109 + 95 + 50) / 3;
const minimumScore = 100;

console.log(AverageScoreTeamDolphin, AverageScoreTeamKoala);

if (
  AverageScoreTeamDolphin > AverageScoreTeamKoala &&
  AverageScoreTeamDolphin >= minimumScore
) {
  console.log(`Team Dolphin Wins 🏆`);
} else if (
  AverageScoreTeamDolphin < AverageScoreTeamKoala &&
  AverageScoreTeamKoala >= minimumScore
) {
  console.log(`Team Koala Wins 🏆`);
} else if (
  AverageScoreTeamDolphin === AverageScoreTeamKoala &&
  AverageScoreTeamDolphin >= 100 &&
  AverageScoreTeamKoala >= 100
) {
  console.log(`Both Team Wins 🏆🏆`);
} else {
  console.log(`No one wins the trophy 😢`);
}
