$(document).ready(function() {

    // Generate a random integer (Goal number) between 29 and __ for each game
    var goal = Math.floor(Math.random()*100 + 21);
    console.log(goal);
    $('#goal').text(goal);

    // Generate random value between 1 and 12 for each gem
    let gemA = Math.floor(Math.random()*10 + 1);
    let gemB = Math.floor(Math.random()*10 + 1);
    let gemC = Math.floor(Math.random()*10 + 1);
    let gemD = Math.floor(Math.random()*10 + 1);
    console.log('Gem A: ' + gemA + ' | Gem B: ' + gemB + ' | Gem C: ' + gemC + ' | Gem D: ' + gemD);

    // Variable declarations for score values
    let wins = 0;
    let losses = 0;
    let currentScore = 0

    $('#winCount').text(wins);
    $('#lossCount').text(losses);
    $('#currentScore').text(currentScore);

    // This is the game logic
    // When user clicks button, add value to current score
    $('#gemA').on('click', function() {
        currentScore = currentScore + gemA;
        console.log('Current Score: ' + currentScore);
        scoreChecker();
    });

    $('#gemB').on('click', function() {
        currentScore = currentScore + gemB;
        console.log('Current Score: ' + currentScore);
        scoreChecker();
    });

    $('#gemC').on('click', function() {
        currentScore = currentScore + gemC;
        console.log('Current Score: ' + currentScore);
        scoreChecker();
    });

    $('#gemD').on('click', function() {
        currentScore = currentScore + gemD;
        console.log('Current Score: ' + currentScore);
        scoreChecker();
    });

    // Check to see if the current score is equal to the goal number
    function scoreChecker() {
        if ($('#currentScore') < goal) {
            console.log('Keep guessing!');

        } else if ($('#currentScore') > goal) {
            lose();
            console.log('You lose!');
        
        } else if ($('#currentScore') === goal) {
            win();
            console.log('You win!');
        }
    }

    //     // When user clicks button, add value to current score
    //     for (var i = 0; i < 4; i++) {
    //         $('.gems').on('click', ()=> {
    //         total += currentScore; //parseInt
    //         console.log('Your current score is: ' + currentScore);
    //         $('#currentScore').text();
    //         });
    //     }
        
    // These are the functions
    // Invoke a win
    function win() {

        // Increment wins by 1
        wins ++;
        console.log('You have won ' + wins + ' many times');

        // Update number of wins in the DOM
        $('#winCount').text('wins');
        reset();
    }

    // Invoke a loss
    function lose() {

        // Increment losses by 1
        losses ++;
        console.log('You have lost ' + losses + ' many times');

        // Update number of losses in the DOM
        $('#lossCount').text('losses');
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