var a=Math.floor((Math.random()*6)+1);

var b="dice"+a+".png";

var c=b;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",b);

var x=Math.floor((Math.random()*6)+1);

var y="dice"+x+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",y);

if(a>x)
  document.querySelector("h1").innerHTML="⛳Player 1 Wins";
else if(a===x)
  document.querySelector("h1").innerHTML="Match Draw";
else
  document.querySelector("h1").innerHTML="Player 2 Wins ⛳";
