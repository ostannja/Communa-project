// "use strict";
// Get the button that opens the modal
var btn = document.querySelectorAll(".popup-button");

// All page modals
var modals = document.querySelectorAll(".popup");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closed");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    popup = document.querySelector(e.target.getAttribute("href"));
    popup.style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
      document.getElementById("body").style.overflow = "scroll";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("popup")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
