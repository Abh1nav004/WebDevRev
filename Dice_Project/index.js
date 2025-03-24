var randomNumber1 = Math.floor((Math.random()*6)+1);

var randdiceimg = "dice"+randomNumber1+".png";

var randomimg = "images/"+randdiceimg;

var imgy1 = document.querySelectorAll("img")[0];

imgy1.setAttribute("src", randomimg);





var randomNumber2 = Math.floor((Math.random()*6)+1);
var randdiceimg2 = "images/dice"+randomNumber2+".png";
var imgy2 = document.querySelectorAll("img")[1];
imgy2.setAttribute("src", randdiceimg2);