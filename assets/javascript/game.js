$(document).ready(function() {

// Generate a random integer (Goal number) between 29 and __ for each game
var randomNum = Math.floor(Math.random()*101+29);

// Console log random
console.log(randomNum);

// Generate random value between 1 and 12 for each gem
let gemA = Math.floor(Math.random()*11+1);
let gemB = Math.floor(Math.random()*11+1);
let gemC = Math.floor(Math.random()*11+1);
let gemD = Math.floor(Math.random()*11+1);

// Variable declarations for score values
let wins = 0;
let losses = 0;
let currentScore = 0;

$('#winCount').text(wins);
$('#lossCount').text(losses);

// This is the game logic

// When the user clicks a button, the value of the
// appropriate gem is added to the Current Score
$('#gemA').on('click', ()=> {
    currentScore = currentScore + gemA;
    console.log("Current Score: " + currentScore);
});

$('#gemB').on('click', ()=> {
    currentScore = currentScore + gemB;
    console.log("Current Score: " + currentScore);
});

$('#gemC').on('click', ()=> {
    currentScore = currentScore + gemC;
    console.log("Current Score: " + currentScore);
});

$('#gemD').on('click', ()=> {
    currentScore = currentScore + gemD;
    console.log("Current Score: " + currentScore);
});

// Check to see if the Current Score is equal to the goal number
// if (currentScore < Goal) {
    // return;
// } else if () currentScore === Goal {
    //  win();
// } else {
    // lose()
// }

// These are the functions

    // Invoke a win
    function win() {

        // Increment wins by 1
        wins ++;
        console.log('Number of wins: ' + wins);

        // Update number of wins in the DOM
        $('#winCount').text(wins);

        reset();
    }

    // Invoke a loss
    function lose() {

        // Increment losses by 1
        losses ++;
        console.log('Number of losses: ' + losses);

        // Update number of losses in the DOM
        $('#lossCount').text(losses);

        reset();
    }

    // Resets the game
    function reset() {
        random = Math.floor(Math.random()*101+29);
        console.log(random);

        // Update new goal number in the DOM
        $('#').text(randomNum);

        gemA = Math.floor(Math.random()*11+1);
        gemB = Math.floor(Math.random()*11+1);
        gemC = Math.floor(Math.random()*11+1);
        gemD = Math.floor(Math.random()*11+1);
        currentScore = 0;
    }

});