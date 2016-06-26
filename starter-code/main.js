
//This function is called in isTwoCards
var isMatch = function(twoCards){

	if (twoCards[0] === twoCards[1]) {
		alert("You found a match!");
		
	}
	else {
		alert("Sorry, try again.");

		//Tried to select only cards that were mismatches in the following commented out code; 
		//However, this only works the first time. Thereafter, the first two divs
		// on the page that have background images are selected.

		/*var mismatched =  [document.querySelectorAll('.card img')[0], document.querySelectorAll('.card img')[1]];
		var mismatchedP = [mismatched[0].parentNode, mismatched[1].parentNode];
		mismatchedP[0].innerHTML = '';
		mismatchedP[1].innerHTML = '';*/
		
		
	}
	var allCards = document.getElementsByClassName('card');
	for (i = 0; i < allCards.length; i++){
	allCards[i].firstChild.setAttribute('style', 'display: none;');
	}
};

//Third Function called by clicking on cards created in second function
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card')); //add clicked card's data to cardsInPlay
	this.firstChild.setAttribute('style', 'display: block;'); //allow img to be displayed
	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

//Start Parsing here
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//First function creates a random order for the cards array
function shuffle(deck) {
	newDeck = [];
	for(i = deck.length; i > 0; i--) {
		var rand = Math.floor(Math.random()*deck.length);
		newDeck.push(deck[rand]);
		deck.splice(rand,1);
	}
	return newDeck;
}
cards = shuffle(cards);

//Second function creates divs with card classes and data and child img elements with display: none
var createBoard = function(){
	var gameBoard = document.getElementById('game-board');
	
	//create cards on the board
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		gameBoard.appendChild(newCard);
		var cardElement = document.getElementsByTagName('div')[i + 1];
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.innerHTML = '<img src="MadisonTeal/' + cards[i] + '.png" style="display: none;" />';
    cardElement.addEventListener('click', isTwoCards);
    //console.log(cardElement);
	}
};
createBoard();