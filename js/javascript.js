console.log('Hello here?');
// GLOBAL VARS are BAD / LIVE with it!
var timeStart; // holds timer value
var lastCard; // holds url of last image shown
var lastId; // Id of cards to compare
var cardCounter = 0; // stops timer when it hits 8 (matching pairs)
var cardTimeDelay = 500; // time image is shown for
var imageFadeTime = 800; // time taken for 2 matching images to disappear
var player1, player2, currentPlayer;

$(document).ready(setup);

function setup() {
  console.log('Setup loaded');
  $('#container1').hide(); // this is a quick fix: stops play if no player names entered
  placeImages(); // does all the image setup stuff in imageData.js
  attachClickListeners();
  timeStart = new Date();
}

function attachClickListeners() {
  // all click listeners in here
  $('img[id^="card"]').click(cardFlip);
  $('#reset').click(reset); //DONE
  $('#startButton').click(gameStart);

  // $('#newGame').click(???); //is this the same as reset,
  // or are there some elements the same, some different.
}

function gameStart() {
  console.log('Inside gameStart');
  // $('#startButton').fadeOut(1000); //FIXME startButton hides if 1 or 2 empty player names
  // i.e. can't start the game!
  if (getPlayers(playerTurn)) {
    console.log(player1, player2);
    $('#container1').show();
    switchPlayers();

  };
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
    $(imageClicked).siblings('.imageHide').show() //sib = same level img
    lastCard = currentUrl;
    lastId = currentId;
    setTimeout(function() {
      $(imageClicked).show();
      $(imageClicked).siblings('.imageHide').hide();
    }, cardTimeDelay, 250);
    console.log('not the same');
  }
}

function matchingCards(lastUrl) {
  console.log('Inside matchingCards');
  cardCounter++;
  $('img[src="' + lastUrl + '"]').siblings().hide(); // hides the backOfCard.svg
  $('img[src="' + lastUrl + '"]').show(); // shows the two matching cards
  $('img[src="' + lastUrl + '"]').fadeOut(
    function(){
      $(this).attr("src", "images/check.svg")
      .fadeIn(500);
    }
  );

  if (cardCounter == 1) { //TODO reset to 8 before deploy
    gameOver();
  }
  displayTimer();
}
// IDEA once 2nd player played, need to calculate shortest time between the 2
// shortest time wins, gets token
// player 1 time vs player 2 time
// players with the least time wins.
