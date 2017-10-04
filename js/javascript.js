console.log('Hello here?');

// vars go here!
// see https://stackoverflow.com/questions/21648147/selecting-a-random-image
// for suggestion of how to complete...

// N.B. 'backOfCard.svg' missing because default hidden card
imageArray = new Array();
imageArray[0] = 'images/blackBox.svg';
imageArray[1] = 'images/blackCircle.svg';
imageArray[2] = 'images/blackCross.svg';
imageArray[3] = 'images/blackHex.svg';
imageArray[4] = 'images/blackTri.svg';
imageArray[5] = 'images/blueBox.svg';
imageArray[6] = 'images/blueCircle.svg';
imageArray[7] = 'images/blueCross.svg';
imageArray[8] = 'images/blueHex.svg';
imageArray[9] = 'images/blueTri.svg';
imageArray[10] = 'images/greenBox.svg';
imageArray[11] = 'images/greenCircle.svg';
imageArray[12] = 'images/greenCross.svg';
imageArray[13] = 'images/greenHex.svg';
imageArray[14] = 'images/greenTri.svg';
imageArray[15] = 'images/orangeBox.svg';
imageArray[16] = 'images/orangeCircle.svg';
imageArray[17] = 'images/orangeCross.svg';
imageArray[18] = 'images/orangeHex.svg';
imageArray[19] = 'images/orangeTri.svg';
imageArray[20] = 'images/purpleBox.svg';
imageArray[21] = 'images/purpleCircle.svg';
imageArray[22] = 'images/purpleCross.svg';
imageArray[23] = 'images/purpleHex.svg';
imageArray[24] = 'images/purpleTri.svg';
imageArray[25] = 'images/redBox.svg';
imageArray[26] = 'images/redBoxCircle.svg';
imageArray[27] = 'images/redCross.svg';
imageArray[28] = 'images/redHex.svg';
imageArray[29] = 'images/redTri.svg';
imageArray[30] = 'images/yellowBox.svg';
imageArray[31] = 'images/yellowCircle.svg';
imageArray[32] = 'images/yellowCross.svg';
imageArray[33] = 'images/yellowHex.svg';
imageArray[34] = 'images/yellowTri.svg';

$(document).ready(setup);

// checked so far working to here*
function setup(){
  console.log('Setup loaded');
  // backOfCard.svg needs to be default setup tile
  $('[id^="card"]').attr("src", "images/backOfCard.svg");
  // $('#card1').attr("src", "images/blackHex.svg");

  console.log($('#backOfCard'));
  return(randomDisplayCards);
  $('#seconds_counter').click(loading);

}
//  to here*

function randomDisplayCards() {
  console.log('Inside randomDisplayCards');
  $('#card1').attr("src", "images/blackHex.svg");
  // some way that js will select random images for the grid
  // TEST display 16 randomDisplayCards
  // getRandomImage(imageArray, "");
  // console.log(imageArray);

  // var randImage = ImageArray[Math.floor(Math.random() * 16)];
  // $('^#card').attr("src", randImage);
  // console.log(randImage);

  // this is a for loop?
    // put 3 random imgs in class col 1 + 1 constant
    // put 3 random imgs in class col 2 + 1 constant
    // put 3 random imgs in class col 3 + 1 constant
    // put 3 random imgs in class col 4 + 1 constant
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
  // adds / holds final scores of each player and calculates totalPlayerTimeTaken
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
