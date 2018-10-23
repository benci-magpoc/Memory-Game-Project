/*
 * Create a list that holds all of your cards
 */

// Initializing array cardClass to store the values of the icon classes
var cardClass = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb",
                  "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", ];

//openCards is where the value of the opened cards are stored
let openCards = [];

//mouseEvent stores the value of the first and second clicked element
let mouseEvent = [];

//moveCounter tracks how many moves the player have done
let moveCounter = 0;

//matchedCards tracks how many matches there are already
let matchedCards = 0;

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
  //Initiating event listener for the container class
  var clickScreen = document.querySelector(".container");
  clickScreen.addEventListener('click', function(event) {
      checkClass(event);
  });
  console.log(active);

  //function checkClass accepts a mouse event parameter and checks what class was clicked by the user.
  function checkClass(clicked) {
    startTimer();

    //assigning the name of the class to the classclicked string
    const classClicked = clicked.path[0].childNodes[1].className;

    //for loop to check if cards are clicked
    for (var i = 0; i < cardClass.length; i++) {

      //checks if the card that was clicked is a class of card
      if (classClicked === cardClass[i] && clicked.path[0].className === "card")
      {
        active = true;

        //increment moveCounter
        moveCounter++;
        console.log(moveCounter);
        console.log(openCards);
        console.log(mouseEvent);
        setTimeout (function() {

            //checks if there are already two open cards which sets a 1 sec delay
            if (openCards.length === 2) {
              mouseEvent[0].className = "card";
              mouseEvent[1].className = "card";
              mouseEvent = [];
              openCards = [];
            }
        }, 1000);

        if (classClicked !== openCards[0]) {

          //sets the class of the clicked card to open
          clicked.path[0].className = "card open show";

            //checking if there are already two matching cards
            if (openCards.length === 2) {
              openCards = [];
              mouseEvent = [];
            }

            else {
              openCards.push(classClicked);
              mouseEvent.push(clicked.path[0]);
            }
          break;
        }

        else if (classClicked === openCards[0]) {

          //sets class of card to match
          clicked.path[0].className = "card match";
          mouseEvent[0].className = "card match";
          openCards = [];
          mouseEvent = [];
          matchedCards++;
          break;
        }


      }
    }
    //calls movesCount where it display the moveCounter to the HTML
    movesCount(moveCounter);
  }

  function cardMatch(classOfCard) {

  }

  function movesCount(moveCounter) {
    document.querySelector('.moves').innerHTML = moveCounter;

  }

  //active is a bollean variable to keep track of the time
  var active = false;

  //startTimer is a function that
  function startTimer() {
    if(active) {
      var timer = document.getElementById("timer").innerHTML;
      //split the time to two arrays
      var time = timer.split(":");
      var minutes = time[0];
      var seconds = time[1];

      if (seconds == 59) {
        minutes++
        seconds = 0;
        if (minutes < 10) minutes = "0" + minutes;
      }
      else {
        seconds++;
        if (seconds < 10) seconds = "0" + seconds;
      }

      //update HTML timer ID on
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;
      setTimeout(startTimer, 1000);
    }
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
