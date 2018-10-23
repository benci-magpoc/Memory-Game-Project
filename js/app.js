/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Initializing array cardClass to store the values of the icon classes
var cardClass = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb",
                  "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", ];

//matchingCards is where the value of the class of the card is stored
let matchingCards = [];
//
let mouseEvent = [];

//function initializeDeck() {
  //assigning shuffled cardClass array into the same array
  cardClass = shuffle(cardClass);

  //selecting the deck class and assigning it to deck object
  var deck = document.querySelector(".deck");

  //selecting all <i> elements in the "deck" div class and assigning it to icons NodeList
  var icons = deck.querySelectorAll("i");

  //assigning shuffled classes to i elements of the icons NodeList using a for loop
  for(var i = 0; i < 16; i++) {
    icons[i].className = cardClass[i];
  }

  // Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);

      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
    }

    return copy;
  }

  //Initiating event listener
  var clickScreen = document.querySelector(".container");
  clickScreen.addEventListener('click', function(event) {
      checkClass(event);
    //console.log(event.path[0].childNodes[1].className);
  });


  //function checkClass accepts a mouse event parameter and checks what class was clicked by the user.
  function checkClass(clicked) {
    //assigning the name of the class to the classclicked string
    const classClicked = clicked.path[0].childNodes[1].className;
console.log(clicked.path[0].className === "card");
    //for loop to check if cards are clicked
    for (var i = 0; i < cardClass.length; i++) {
      if (classClicked === cardClass[i] && clicked.path[0].className === "card")
      {

        console.log(clicked.path[0].className);
        console.log(clicked);
        console.log(mouseEvent);
        setTimeout (function() {
            if (matchingCards.length === 2) {
            mouseEvent[0].className = "card";
            mouseEvent[1].className = "card";
            mouseEvent = [];
            matchingCards = [];
            }
        }, 1000);

        if (classClicked !== matchingCards[0]) {
          clicked.path[0].className = "card open show";
            //checking if there are already two open cards
            if (matchingCards.length === 2) {
              matchingCards = [];
              mouseEvent = [];
            }
            else {
              matchingCards.push(classClicked);
              mouseEvent.push(clicked.path[0]);
            }
          break;
        }

        else if (classClicked === matchingCards[0]) {
          clicked.path[0].className = "card match";
          mouseEvent[0].className = "card match";
          matchingCards = [];
          mouseEvent = [];
          break;
        }
      }
    }
  }



  function cardMatch(classOfCard) {

  }

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
