console.log('Hello are you here?');

// vars go here!

$(document).ready();

function setup(){
  console.log('Inside setup');
}
function randomDisplayCards(){
  console.log('Inside randomDisplayCards');
  // some way that js will select random images for the grid
  // maybe, of the 16, 12 are different,
  // 4 are the same tiles, not of 16
  // the 4 appear 1 time in every column
  // var num = Math.floor(Math.random() * ?);

  //
}
// *****
$("button#seconds-counter").on("click", incrementSeconds())

var seconds = 5;
var el = document.getElementById('seconds-counter');
function incrementSeconds() {
    console.log('"Only " + seconds + " seconds to go."');
}

var cancel = setInterval(incrementSeconds, 1000);
// *****


// has a countdown timer displaying 5 to 1 secs in 5:00 format at the top
// if no user input within 5 secs, say "You're too slow!"
// goes to next player


function totalPlayerTimeTaken(){
  console.log('Inside totalPlayerTimeTaken');
}

function rightCardsPicked(){
  console.log('Inside rightCardsPicked');
  // if / else statement cards picked display: "right cards = Well done!", Do something
  // add point to players score
  // if wrong cards picked, display: "wrong cards = sorry try again", Go to other player
  //better put: win or lose
}

function scoreCounter(){
  console.log('Inside scoreCounter');
}

// CANVAS ELEMENT of counter flashing and twisting and being added to player score.
// Related to rightCardsPicked function.
// Still need counter in main javaScript, not displayed but in memory


function switchPlayers(){
  console.log('Inside switchPlayers');
  // after players turn, go to next player
}

function concedeGameButton(){
  console.log('Inside concedeGameButton');
  // makes no score, goes to next player
}

function finalScoreCounter(){
  console.log('Inside finalScoreCounter');
  // adds / holds final scores of each player and caluculates totalPlayerTimeTaken
  // calculate players counters and factor in amount of time totalPlayerTimeTaken
  // very simmial / related / combined / callback? to endOfGame
}

function endOfGame(){
  console.log('Inside endOfGame');
  // counter of amount 1st player to score 3
  // add a "click to play again" flash-up in jQuery. jQuery is clicked, go to setup
}

function resetButton(){
  console.log('Inside resetButton');
}
