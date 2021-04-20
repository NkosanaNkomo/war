// // Clubs Values
// var c2 = 2
// var c3 = 3
// var c4 = 4
// var c5 = 5
// var c6 = 6
// var c7 = 7
// var c8 = 8
// var c9 = 9

// // Diamonds Values
// var d2 = 2
// var d3 = 3
// var d4 = 4
// var d5 = 5
// var d6 = 6
// var d7 = 7
// var d8 = 8
// var d9 = 9

// // Hearts Values
// var h2 = 2
// var h3 = 3
// var h4 = 4
// var h5 = 5
// var h6 = 6
// var h7 = 7
// var h8 = 8
// var h9 = 9

// // Spades Values
// var s2 = 2
// var s3 = 3
// var s4 = 4
// var s5 = 5
// var s6 = 6
// var s7 = 7
// var s8 = 8
// var s9 = 9

// // Ace Values
// var aC = 1
// var aD = 1
// var aH = 1
// var aS = 1

// var playerOne()=>{

// }
// var playerTwo()=>{

// }

import Deck from "./deck.js"

const CARD_VALUE_MAP = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14,
}

const computerCardSlot = document.querySelector('.computer-card-slot')
const playerCardSlot = document.querySelector("playerCardSlot")
const computerDeckElement = document.querySelector(".player-card-slot")
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('.text')

let playerDeck, computerDeck, inRound

document.addEventListener('click', () => {
    if (inRound) {
        cleanBeforeRound()
    }else {
        flipCards()
    }
})

startGame()
function startGame() {
const deck = new Deck()
deck.shuffle()

const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
inRound = false

cleanBeforeRound()

}

function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerText = ''

    updateDeckCount()

}

function flipCards() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())

    updateDeckCount()


}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = Deck.numberOfCards
}

function isRoundWinner(cardOne, CardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}