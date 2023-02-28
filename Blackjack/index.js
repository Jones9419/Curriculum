const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");

const getRank = rank => {
  if (rank === 'ace') {
		return 1;
  }
  if (rank === 'jack' || rank === 'queen' || rank === 'king') {
		return  10;
  }
  if (!isNAN(rank)) {
		return rank;
  }
};

const makeDeck = () => {
	const suits = ["hearts", "spades", "clubs", "diamonds"];
	const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
	let deck = [];

	for (let suit of suits) {
	  for (const rank of ranks) {
			const card = {
		    rank,
		    suit,
		    pointValue: getRank(rank),
			}
			deck.push(card);
	  }
	}
	return deck;
}

const deck = makeDeck();



window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});
