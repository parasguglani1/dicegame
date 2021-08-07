
var n= Math.random();
n= n*6;
n= Math.floor(n) +1;
var imagesource= "images/dice"+n+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesource);