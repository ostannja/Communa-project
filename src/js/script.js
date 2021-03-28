// "use strict";

// burger-menu
var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// change href for the mobile window`s width
if (window.innerWidth < 768) {
  let pageRegistration = document.querySelector(".registration");
  pageRegistration.setAttribute("href", "registration.html");

  let buttonTag = document.querySelector("button");
  buttonTag.classList.remove("popup-button");

  let pageAuthorization = document.querySelector(".authorization");
  pageAuthorization.setAttribute("href", "authorization.html");
  pageAuthorization.classList.remove("popup-button");
}

// Get the button that opens the modal
let btn = document.querySelectorAll(".popup-button");
// All page modals
let modals = document.querySelectorAll(".popup");
// Get the <span> element that closes the modal
let spans = document.getElementsByClassName("closed");
// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    popup = document.querySelector(e.target.getAttribute("href"));
    popup.style.display = "block";
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  };
}
// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (let index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
      window.onscroll = true;
    }
  };
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("popup")) {
    for (let index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

//webpack in gulp
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

let uploader = document.querySelector(".label-photo");
let inputuploader = document.querySelector(".input-uploader");
let inputUploaderBefore = document.querySelectorAll(".input-uploader");

//uploader in settings.html
document
  .querySelector(".input-uploader")
  .addEventListener("change", function () {
    if (this.files[0]) {
      var fr = new FileReader();

      fr.addEventListener(
        "load",
        function () {
          uploader.style.backgroundImage = "url(" + fr.result + ")";
          inputuploader.style.width = "108.5px";
          inputUploaderBefore[0].style.setProperty(
            "--content",
            "'Оновити фото'"
          );
          var ops = window
            .getComputedStyle(
              document.querySelector(".input-uploader"),
              ":before"
            )
            .getPropertyValue("content");
          let burgerMenu = document.getElementById("burger-menu");
          console.log(burgerMenu);
          console.log(ops);
        },
        false
      );

      fr.readAsDataURL(this.files[0]);
    }
  });
