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
