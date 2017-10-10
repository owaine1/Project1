
$('img[src="' + lastUrl + '"]').attr("src", "images/check.svg").delay(250);

*****

$('img[src="' + lastUrl + '"]').fadeOut(
  function(){
    $(this).attr("src", "images/check.svg")
    .fadeIn(250);
  }
); // end fadeOut

*****

SASS
@mixin square($size, $color) {
  width: $size;
  height: $size;
  background-color: $color;
}

.small-blue-square {
  @include square(20px, rgb(0,0,255));
}

.big-red-square {
  @include square(300px, rgb(255,0,0));
}
button, input {
  border-radius: 40%;
  padding: 1em 1em;
}

button {

  border: none;
  background-color: #fc6;
  font-weight: 800;
  outline:none;
  width: fit-content;
}
