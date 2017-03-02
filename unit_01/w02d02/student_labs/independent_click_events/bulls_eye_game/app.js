// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment
//         how the function works line by line

// STEP 3:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click
//              the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');
  
  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing);
  ring2.addEventListener("click", bullseyeGame.middleRing);
  ring3.addEventListener("click", bullseyeGame.bullseye);
}

var ring1 = document.querySelector('.ring-1');
var ring2 = document.querySelector('.ring-2');
var ring3 = document.querySelector('.ring-3');

var bullseyeGame = {
  score: 0,
//Here, we are declaring the function and naming it "updateScore".
//Our fucntion takes one parameter, "points".
  updateScore: function(points) {
//Now we declare a variable for selecting the element with class "score".
    var scoreElement = document.querySelector('.score');
//Because this is not an event listener, we can use "this" to refer to
//our function's parent object. So then we make the key "score"'s
//value equal to itself plus points (the parameter that we pass in).
    this.score += points
//Now we use our variable to select the score element and change its inner
//HTML to be equal to score's new value followed by the string "points".
    scoreElement.innerHTML = `${this.score} points`
  },

  miss: function(event) {
    event.stopPropagation();
    alert('YOU MISSED');
    bullseyeGame.updateScore(0);
    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
    // element that was clicked
  },

  outerRing: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(10);
    this.style.background = "yellow";
    setTimeout(function(){ring1.style.background = "red"}, 2000);
  },

  middleRing: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(50);
    this.style.background = "yellow";
    setTimeout(function(){ring2.style.background = "white"}, 2000);
  },

  bullseye: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(100);
    this.style.background = "yellow";
    setTimeout(function(){ring3.style.background = "red"}, 2000);
  }
}
