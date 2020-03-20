var player1=prompt("Enter player 1 name ");
var player2=prompt("Enter player 2 name ");
document.querySelector("#p1").innerHTML=player1;
document.querySelector("#p2").innerHTML=player2;
function myFunction(){
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);
//for winning and losing
if (randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").textContent=player1+' wins';
    }
else if (randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").textContent=player2+" wins";
    }
else{
    document.querySelector("h1").textContent="Draw! play again ";
}
}