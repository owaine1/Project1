// randomizes the 16 imgs src array
// then builds an img tag with an src attribute frm the 16 imgs array
// And then adds it the img tag as a sibling to box tags e.g.
// <img id="card0" src="images/backOfCard.svg" style="display: none;">
// <img src="images/redTri.svg" class="imageHide" style="display: inline;">
function placeImages() {
  console.log('Inside placeImages');
$('div[id^=card]').show();
  var hiddenImages = build16ImagesArray(); //builds 2 x 8 image array
  var blankTiles = $('div[id^=box]'); // jQuery grabs all divs with id starting 'box...'

  blankTiles.each(function(indexno) {
    var newImage = hiddenImages[indexno]; // for each blankTiles indexno get corresponding image in hiddenImages
    var $imgTag = $('<img>'); // jQuery create <img> tag
    $imgTag.attr('src', newImage); // set src and class for <img>
    $imgTag.attr('class', 'imageHide');
    $imgTag.addClass('addedImage');
    $(this).append($imgTag); // append <img> to the #box div
  })
}

// generates random number between 0 & 34
// chooses 2 copies of unique image frm imageArray(34 imgs)
// e.g. [circle, circle, square, square, etc..]
function build16ImagesArray() {
  var sixteenImages = [];
  // console.log('Inside build16ImagesArray');
  var all_images = imageDatabase(); // gets all images from 'db'
  for (var counter = 0; sixteenImages.length < 16; counter++) {
    var imgNo = Math.floor(Math.random() * 35); //randomly selects an image from 'db'
    var imageUrl = imageArray[imgNo]; //converts img no into img url
    // checks if randomly chosen imageUrl is NOT in sixteenImages array so far
    if ($.inArray(imageUrl, sixteenImages) == -1) {
      // adds 2 copies to sixteenImages array
      sixteenImages.push(imageUrl);
      sixteenImages.push(imageUrl);
    }
  }
  var shuffledImages = shuffleArray(sixteenImages);
  return shuffledImages;
}

// array shuffler - stolen from here!
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(incomingArray) {
  for (var i = incomingArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = incomingArray[i];
    incomingArray[i] = incomingArray[j];
    incomingArray[j] = temp;
  }
  return incomingArray;
}

function imageDatabase() {
  // console.log('Inside imageDatabase');
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
  return imageArray;
}
