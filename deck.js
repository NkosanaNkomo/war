var SUITS = ["♡", "♢", "♤", "♧"]
var VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] 

export default class Deck {
    constructor(cards = freshDeck()) {
      this.cards = cards
    }
  
    get numberOfCards() {
      return this.cards.length
    }
  //gets top card from deck
    pop() {
      return this.cards.shift()
    }
  // adds card to bottom of deck
    push(card) {
      this.cards.push(card)
    }
  

    // For loop Shuffles deck and makes them random, starts from back of cards
    // "Math" is for predetermined mathmatical operations. Math.floor returns the largets
    // ...interger less than or equal to x
    // Math.random returns a pseudo random number between 0 and 1
    shuffle() {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
      }
    }
  }
  
  class Card {
    constructor(suit, value) {
      this.suit = suit
      this.value = value
    }
  

    //used to change color of suit. if it's a club or spade it turns it black. otherwise
    // it turns red
    get color() {
      return this.suit === "♧" || this.suit === "♤" ? "black" : "red"
    }
  

    //used to create card that switches values
    //gets the HTML for any of our cards
    //dataset used to make certain data easier to find
    getHTML() {
      const cardDiv = document.createElement("div")
      cardDiv.innerText = this.suit
      cardDiv.classList.add("card", this.color)
      cardDiv.dataset.value = `${this.value} ${this.suit}`
      return cardDiv
    }
  }
  
  //flatmap condenses arrays into one array 
  //function creates new card with values
  function freshDeck() {
    return SUITS.flatMap(suit => {
      return VALUES.map(value => {
        return new Card(suit, value)
      })
    })
  }