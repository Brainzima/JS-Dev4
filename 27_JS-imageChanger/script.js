currentImage=0
setInterval(function() {
    currentImage++;
    if (currentImage > 5) {
      currentImage = 1;
    }
    document.getElementById("myImage").src = "images/Image" + currentImage + ".jpg";
    // console.log(currentImage)
  }, 1000);