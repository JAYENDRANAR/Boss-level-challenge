//for DICE 1
var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumbreSource1 = "dice"+ randomNumber1+ ".png";
var randomNumberImage1 = "./images/" +randomNumbreSource1;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomNumberImage1);




//for the DICE 2
var randomNumber2 = Math.floor((Math.random() * 6)+1);
var randomNumbreSource2 = "dice"+ randomNumber2+ ".png";
var randomNumberImage2 = "./images/" +randomNumbreSource2;
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomNumberImage2);


if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML=("player 1 wins");
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML=("player 2 wins");
}else{
     document.querySelector("h1").innerHTML=("draw");
}