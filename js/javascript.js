console.log('Hello here?');

// vars go here!
// see https://stackoverflow.com/questions/21648147/selecting-a-random-image
// for suggestion of how to complete...
/*
imageArray[0] = 'backOfCard.svg';
imageArray[1] = 'blackBox.svg';
imageArray[2] = 'blackCircle.svg';
imageArray[3] = 'blackCross.svg';
imageArray[4] = 'blackHex.svg';
imageArray[5] = 'blackTri.svg';
imageArray[6] = 'blueBox.svg';
imageArray[7] = 'blueCircle.svg';
imageArray[8] = 'blueCross.svg';
imageArray[9] = 'blueHex.svg';
imageArray[10] = 'blueTri.svg';
imageArray[11] = 'greenBox.svg';
imageArray[12] = 'greenCircle.svg';
imageArray[13] = 'greenCross.svg';
imageArray[14] = 'greenHex.svg';
imageArray[15] = 'greenTri.svg';
imageArray[16] = 'orangeBox.svg';
imageArray[17] = 'orangeCircle.svg';
imageArray[18] = 'orangeCross.svg';
imageArray[19] = 'orangeHex.svg';
imageArray[20] = 'orangeTri.svg';
imageArray[21] = 'purpleBox.svg';
imageArray[22] = 'purpleCircle.svg';
imageArray[23] = 'purpleCross.svg';
imageArray[24] = 'purpleHex.svg';
imageArray[25] = 'purpleTri.svg';
imageArray[26] = 'redBox.svg';
imageArray[27] = 'redBoxCircle.svg';
imageArray[28] = 'redCross.svg';
imageArray[29] = 'redHex.svg';
imageArray[30] = 'redTri.svg';
imageArray[31] = 'yellowBox.svg';
imageArray[32] = 'yellowCircle.svg';
imageArray[33] = 'yellowCross.svg';
imageArray[34] = 'yellowHex.svg';
imageArray[35] = 'yellowTri.svg';
*/
$(document).ready(setup);

// checked so far working to here*
function setup(){
  console.log('Setup loaded');

  $('#seconds_counter').click(loading);
  $('[id^="card"]').attr("src", "images/backOfCard.svg");
  // $('#card1').attr("src", "images/blackHex.svg");
  // $('#card10').attr("src", "images/blackCircle.svg");

  // backOfCard.svg needs to be default setup tile
  console.log($('#backOfCard'));

}
//  to here*

//document.getElementById('#box1').textContent = 'Check!';
function randomDisplayCards() {
  console.log('Inside randomDisplayCards');
  // some way that js will select random images for the grid
    // put 3 random imgs in class col 1 + 1 constant

    // put 3 random imgs in class col 2 + 1 constant
    // put 3 random imgs in class col 3 + 1 constant
    // put 3 random imgs in class col 4 + 1 constant
      // this is a for loop
//  something like https://stackoverflow.com/questions/21648147/selecting-a-random-image
  //  of 16 tiles, 12 are different, 4 are the same
  // the 4 appear 1 time in every column
  // var num = Math.floor(Math.random() * ?);
  // per column 1 constant, 3 randoms; same for the other 4 columns

}


function loading(){
  console.log('clicked');
}


// setTimeout(incrementSeconds, 5000
// function incrementSeconds() {
  // var seconds;

    // console.log('Only ' + seconds + ' seconds to go.');
// }

// var cancel = setInterval(incrementSeconds, 1000);

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
