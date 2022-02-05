var n1 = Math.random();
n1 = n1 * 6;
n1 = Math.floor(n1) + 1;
var imageSource = "images/dice" + n1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var n2 = Math.random();
n2 = n2 * 6;
n2 = Math.floor(n2) + 1;
var imageSource = "images/dice" + n2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource);

if (n1 > n2) {
  document.querySelector("h1").innerHTML = "Player1 won";
} else if (n1 < n2) {
  document.querySelector("h1").innerHTML = "Player2 won";
} else document.querySelector("h1").innerHTML = "tie";
