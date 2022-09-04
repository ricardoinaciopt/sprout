setTimeout(function () {
  document.getElementById("intro2").classList.add("fade-in");
  document.getElementById("intro2").style.opacity = 1;
}, 5000);

setTimeout(function () {
  document.getElementById("intro3").classList.add("fade-in");
  document.getElementById("intro3").style.opacity = 1;
  document.getElementById("face").classList.add("fade-out");
  document.getElementById("face").style.opacity = 0;
}, 8000);

setTimeout(function () {
  document.getElementById("face2").classList.add("fade-in-face");
  document.getElementById("face2").style.opacity = 1;
  document.getElementById("name-input").classList.add("fade-in");
  document.getElementById("name-input").style.opacity = 1;
  document.getElementById("ok-input").classList.add("fade-in");
  document.getElementById("ok-input").style.opacity = 1;
}, 10000);
