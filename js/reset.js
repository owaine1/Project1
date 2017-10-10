function reset(){
  console.log('Inside reset');
  $('#startButton').fadeIn(1000);
  $('img').remove('.addedImage');
  placeImages();
  $('#timeTaken').html('');
}
// TODO think reset would reset scores. New Game button is simmilar
// but not reset scores
