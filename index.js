// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 invokes counterMaker()/ we assigned counterMaker() to the const counter1;
 * counter2 wont work with the counterMaker() function. only grabs and manipulates the let count=0;
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses closure, because it goes back to counterMaker() which has another    function inside of it that is used by counter1
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 would be useful in updating the counter constantly, while counter to always begins at 0.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){
return Math.floor(Math.random() * 3);
    /*Code Herce*/
}
console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(/*code Here*/cbInning,numOfInning){
let homePts = 0;
let awayPts = 0;

for (let i = 0; i < numOfInning; i++); {
  homePts += Math.floor(Math.random(cbInning) * numOfInning);
  awayPts += Math.floor(Math.random(cbInning) * numOfInning);
}
let endScore = {
 Home: homePts, Away: awayPts
}
return endScore;
}
console.log(finalScore(inning(),9));
  /*Code Here*/

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(cbInning,numOfPoints, numOfInning) {
  let homeScore = 0;
  let awayScore = 0;

  for (var i = 1; i <= numOfInning; i++) {
     let inning = i;
    if (inning === 1) {
      homeScore += Math.floor(Math.random(numOfPoints) * 3);
      awayScore += Math.floor(Math.random(numOfPoints) * 3);
      console.log(`${inning}st inning: ${homeScore} - ${awayScore}`);
    } else if (inning === 2) {
      homeScore +=Math.floor(Math.random(numOfPoints) * 3);
      awayScore += Math.floor(Math.random(numOfPoints) * 3);
      console.log(`${inning}nd inning: ${homeScore} - ${awayScore}`);
    } else if (inning === 3) {
      homeScore += Math.floor(Math.random(numOfPoints) * 3);
      awayScore += Math.floor(Math.random(numOfPoints) * 3);
      console.log(`${inning}rd inning: ${homeScore} - ${awayScore}`);
    } else if (inning > 3 && inning !== numOfInning) {
      homeScore += Math.floor(Math.random(numOfPoints) * 3);
      awayScore += Math.floor(Math.random(numOfPoints) * 3);
      console.log(`${inning}th inning: ${homeScore} - ${awayScore}`);
    } else if (inning === numOfInning) {
      homeScore += Math.floor(Math.random(numOfPoints) * 3);
      awayScore += Math.floor(Math.random(numOfPoints) * 3);
      console.log(`${inning}th inning: ${homeScore} - ${awayScore}`);
      console.log(`Final Score: ${homeScore} - ${awayScore}`);
    }
  }
}

(scoreboard(inning,finalScore,9));
