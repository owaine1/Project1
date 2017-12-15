function reset(){
  console.log('Inside reset');
  $('#startButton').fadeIn(1000);
  $('img').remove('.addedImage');
  placeImages();
  $('#timeTaken').html('');
}
// resets time and board
// TODO think reset would reset scores. New Game button is similar
// but doesn't reset scores
// option1 goto do reset as doing
// option2 goto setup, complete hard reset. Need a seperate button added to a click listener on the html
// add this to javascript.js function attachClickListeners
