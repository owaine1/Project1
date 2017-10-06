function getPlayers() {
  console.log('Inside getPlayers');
  player1 = $('#player1').val();
  player2 = $('#player2').val();
  if (player1 == '' || player2 == '') {
    $('#messages').text('Enter both player names');
  } else {
    $('#messages').text('');
    return true;
  }

}

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
    currentPlayer = player1; //initial player1
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
