//responsive menu
function toggle(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById("myMenu");
  ``;
  if (myMenu.className === "sideNav") {
    myMenu.className += "menu-active";
  } else {
    myMenu.className = "sideNav";
  }
}

//dots slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//auto slide
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000);
}

// discover more
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML =
      'More Details <img src="/image/111111.svg" alt="" class="iconof" />';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML =
      'Less Details <img src="/image/11112.svg" alt="" class="iconof" />';
    moreText.style.display = "inline";
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("feature-box-group");
  var totalSlides = x.length;

  if (n > totalSlides) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = totalSlides;
  }

  for (i = 0; i < totalSlides; i++) {
    x[i].style.transform = `translateX(${-(slideIndex - 1) * 100}%)`;
  }
}

//room slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("room-container");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
