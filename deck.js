var SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"]
var VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 

export default class Deck {
    constructor(cards) {
        this.cards = cards
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return SUITS.flatmap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

