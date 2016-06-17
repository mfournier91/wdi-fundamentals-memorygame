//console.log("JS file is connected to HTML! Woo!");

// Create str values for each card
var cardOne = "queen", cardTwo = "king", cardThree = "queen", cardFour = "king";

/*if (cardTwo === cardFour) {
	alert("You found a match!");
}
if (cardOne === cardThree) {
	alert("You found a match!");
}
if (cardOne === cardTwo) {
	alert("Sorry, try again.");
}*/

var createBoard = function(){
	var gameBoard = document.getElementById('game-board');
	console.log(gameBoard);
	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		//newCard.className = "card";
		gameBoard.appendChild(newCard);
		createdCard = document.getElementsByTagName('div')[i + 1];
    createdCard.className = "card";
	}
}
createBoard();