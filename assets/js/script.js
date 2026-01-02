document.addEventListener("DOMContentLoaded", function() {
  var images = [].slice.call(document.querySelectorAll("img[data-hires-src]"));

  images.forEach(function (image) {
    var hires = image.getAttribute("data-hires-src");
    var preloader = new Image();
    preloader.src = hires;
    preloader.onload = function() {
      image.src = hires;
    };
  });
});
