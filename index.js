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
console.log(processFirstItem(['foo','bar'], (str)=> str + str))
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 has a nested function inside of it. 
 * Counter 2 uses a global variable and is a singular function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter 1 would be using a closure because it is using a function within a function.
 * 
 * 3. In what scenario would the counter1 code be preferable? 
 * In what scenario would counter2 be better? 
 *counter 1 would be preferale if there are multiple counts going 
 counter 2 would be fine if there was only counter going 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log(counter1())
console.log(counter1())
console.log(counter1())

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log(counter2())
console.log(counter2())
console.log(counter2())



/* Task 2: inning() 

Write a function called `inning` that returns a random number of 
points that a team scored in an inning. This should be a whole number 
between 0 and 2. */

function inning(){
  return Math.floor(Math.random()*3);
}
console.log(inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback 
function `inning` (from above) and a number of innings and and 
returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,innings){
  let home = 0
  let away = 0
  for(let i=0; i<innings; i++){
      home += inning()
      away += inning()
  } 
  return final = {Home: home, Away: away}
}
console.log(finalScore(inning, 9))


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam 
*/


function scoreboard(getInningScore,inning,numInnings) {
  let scores = {home: 0, away:0}
  let scoreText = ''
  for (let i=0; i<numInnings; i++){
    let score = getInningScore(inning)
    scores.home = scores.home + score.Home 
    scores.away = scores.away + score.Away 
    if (i===0){
      scoreText = `1st inning: ${scores.away}-${scores.home}\n`
    } else if (i===1){
      scoreText = scoreText + `2nd inning ${scores.away}-${scores.home}\n`
    } else if (i===2){
      scoreText = scoreText + `3rd inning ${scores.away}-${scores.home}\n`
    } else {
      scoreText = scoreText + `${i+1}th inning ${scores.away}- ${scores.home}\n`
    } if (i+1===numInnings) {
      score = getInningScore(inning)
    scores.home = scores.home + score.Home 
    scores.away = scores.away + score.Away 
      scoreText = scoreText + `Final Score ${scores.away}-${scores.home}\n`
    }
  }
  return scoreText 
}
console.log(scoreboard(getInningScore, inning, 9))


function getInningScore(inning){
  let home = inning()
  let away = inning()
  return final = {Home: home, Away: away}
}

console.log(getInningScore(inning,1))


