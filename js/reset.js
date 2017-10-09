function reset(){
  console.log('Inside reset');
  $('#startButton').fadeIn(1000);
  $('img').remove('.addedImage');
  placeImages();
  $('#timeTaken').html('');
}
