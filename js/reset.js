function reset(){
  console.log('Inside reset');
  $('#startButton').fadeIn(1000);
  $('img').remove('.addedImage');
  placeImages();
  $('#timeTaken').html('');
}
// TODO think reset would reset scores is New Game same / certainly similar 
