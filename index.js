var randomNumber1 = Math.floor(Math.random()*6)+1; // this genarates a random number betweem 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png" // gives a random image of dice1 to dice6

var randomDiceSource = "./images/" + randomDiceImage; // ./images/dice1.png - ./images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random()*6)+1; // this genarates a random number betweem 1 and 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png" // gives a random image of dice1 to dice6

var randomDiceSource2 = "./images/" + randomDiceImage2; // ./images/dice1.png - ./images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
} else {
    document.querySelector("h1").innerHTML='Draw';
}