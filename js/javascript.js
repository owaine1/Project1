console.log('Hello here?');
// GLOBAL VARS are BAD / LIVE with it!
var timeStart; // holds timer value
var lastCard; // holds url of last image shown
var lastId; // Id of cards to compare
var cardCounter = 0; // stops timer when it hits 8 (matching pairs)
var cardTimeDelay = 500; // time image is shown for
var imageFadeTime = 1000; // time taken for 2 matching images to disappear
var player1, player2, currentPlayer;

$(document).ready(setup);

function setup() {
  console.log('Setup loaded');
  $('#container1').hide();
  placeImages(); // does all the image setup stuff in imageData.js
  attachClickListeners();
  timeStart = new Date();
}

function attachClickListeners() {
  // all click listeners in here
  $('img[id^="card"]').click(cardFlip);
  $('#reset').click(reset); //DONE
  $('#startButton').click(gameStart);

  // $('#newGame').click(???); //is this the smae as reset,
  // or are there some elements the same, some different.
}

function gameStart() {
  console.log('Inside gameStart');
  player1 = $('#player1');//.val()
  player2 = $('#player2');
  console.log(player1, player2);
  $('#container1').show();
  switchPlayers();
}

// hides the image clicked and shows the sibling image
// also checks if the imageurl matches the previous image
// if not, rehides after 0.5 second
function cardFlip() {
  console.log('Inside cardFlip');
  var imageClicked = this;

  // $(this)
  //   .fadeOut(250, function() {
  //     $(this).siblings('.imageHide').show();
  //   })
  //   .fadeIn(250);
  var currentUrl = $(imageClicked).siblings('.imageHide').attr('src');
  var currentId = $(imageClicked).attr('id');
  console.log('currentId: ' + currentId);

  if (currentUrl == lastCard && currentId != lastId) { //cU =(lC and cI)
    console.log('the same!');
    matchingCards(currentUrl);
  } else {
    $(imageClicked).hide();
    $(imageClicked).siblings('.imageHide').show(); //sib = same level img
    lastCard = currentUrl;
    lastId = currentId;
    setTimeout(function() {
      $(imageClicked).show();
      $(imageClicked).siblings('.imageHide').hide();
    }, cardTimeDelay);
    console.log('not the same');
  }
}

function matchingCards(lastUrl) {
  console.log('Inside matchingCards');
  cardCounter++;
  $('img[src="' + lastUrl + '"]').siblings().hide(); // hides the backOfCard.svg
  $('img[src="' + lastUrl + '"]').show(); // shows the two matching cards
  // $('img[src="' + lastUrl + '"]').fadeOut(imageFadeTime);
  $('img[src="' + lastUrl + '"]').attr("src", "images/check.svg");
  if (cardCounter == 1) {//TODO reset to 8 before deploy
    gameOver();
  }
  displayTimer();
}
// switch player function???
// IDEA once 2nd player played, need to calculate shortest time between the 2
// shortest time wins, gets token
// player 1 time vs player 2 time
// players' least time wins.
function switchPlayers() {
  console.log('Inside switchPlayers');
  console.log(player1, player2, currentPlayer);

  if (player1 == currentPlayer) {
    console.log('player1' + player1 + ', ' + recordTime());
    currentPlayer = player2;
    $('#playerTurn').text(player1 + "'s turn")

  } else if (player2 == currentPlayer) {
    console.log('player2' + player2 + ', ' + recordTime());
    currentPlayer = player1;
    $('#playerTurn').text(player1 + "'s turn")

  } else {
    currentPlayer = player1;//initial player1
    $('#playerTurn').text(player1 + "'s turn")
  }

  // TODO after players turn, go to next player
  // screen flashup "Awesome, next players' turn": once all cards matched.
  // start new board? (a bit like reset / setup, but different,
  //  just call placeImages function???)
  // retain time: new (BAD) global variable for player1 time
  // and another for player2 time?
  // but keep time of both. note 1st time player not to be awarded anything unless
  // 2nd player has played.
}

function gameOver() {
  console.log('Inside gameOver');
  switchPlayers();
}

function recordTime() {
  console.log('Inside recordTime');
  var timeEnd = new Date();
  var timeTaken = (timeEnd - timeStart) / 1000;
  $('#timeTaken').text('game over, time taken: ' + timeTaken);
  return timeTaken;
}

function displayTimer() {
  console.log(); //TODO not recordTime function, use timeStart to display somewhere?
}

function totalPlayerTimeTaken() {
  console.log('Inside totalPlayerTimeTaken');
}

function scoreCounter() {
  console.log('Inside scoreCounter');
}

// CANVAS ELEMENT of counter flashing and twisting and being added to player score.
// Related to rightCardsPicked function.
// Still need counter in main javaScript, not displayed but in memory

function concedeGameButton() {
  console.log('Inside concedeGameButton');
  // makes no score, goes to next player
}

function finalScoreCounter() {
  console.log('Inside finalScoreCounter');
  // holds players' wins
}

function endOfGame() {
  console.log('Inside endOfGame');
  // counter of amount 1st player to score 3
  // add a "click to play again" flash-up in jQuery. jQuery is clicked, go to setup
}
