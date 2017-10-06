function reset(){
  console.log('Inside reset');
  $('img').remove('.addedImage');
  placeImages();
  $('.timeTaken').html('');
}
