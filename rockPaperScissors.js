// This line is a comment and will be ignored by the browser
// We denote comments using: // or /* */

// Program starts here:
console.log('Starting the game!');

// Define and initialise our the global variables
// `global` means the variables will be available across the entire program

// TODO 1. We need to declare an array called `options`, that contains 3 strings: 'paper', 'rock', 'scissors'

var options = ['rock' , 'paper' , 'scissors'];

// TODO 2. We need to declare an Object literal calles `scores`, with two properties: `human` and `bot`. 
//  Give each property the initial value of: 0
var scores =
{
 human: 0,
 bot: 0
};

/* ..... YOUR CODE HERE ..... */

// Define a funcion that returns a random option from the array of options
// We will use this function to help the bot select an option
function getRandomOption() {
	// Generate and return a random integer between `min` and `max`
	function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max-min+1) + min);
	}
	
	// get a random number that is either 0, 1 or 2
	var randomIndex = randomIntFromInterval(0, 2);
	
	// return an option from the `options` array
	return options[randomIndex]; // randomIndex is actually used as a index to pick the bot option!
}

// TODO 3. Define a function that adds a point for the winner and updates the UI
function scoreFor(gambler) {
	scores[gambler] =+ 1;
	document.getElementById('humanScore').innerHTML = scores.human;
	document.getElementById('humanScore').innerHTML = scores.bot;

	/* ..... YOUR CODE HERE ..... */
	
}

// TODO 6. Define a function that will animate the winning title
// HINT: To do the animation, you can use a .webkitTransition
function animatePlayer(player) {

var playerScore = player + 'Score';
var timing = 200;

document.g	
}

// TODO 5. Define our click handler, this is the function that we will call 
//   when a player selects rock/paper/scissors
function clickHandler(humanOption) {

	var botOption = getRandomOption()

document.getElementById(playerScore).style.webkitTransition = "-webkitTransition"



	if (humanOption === botOption) {
		console.log ("draw")
	}
	else if (humanOption === 'rock' && botOption ==='scissors'
		|| humanOption === 'paper' && botOption ==='rock'
		|| humanOption === scissors && botOption === 'paper')
{
scoreFor('human');
animatePlayer('human');
}
	else {
scoreFor('bot')
animatePlayer('human');
	}
}


// TODO 4. Bind a `click` event for our three buttons
// HINT: you can use document.getElementById(<INSERT ID>).addEventListener('click', function() { clickHandler(<VALUE TO PASS IN>); });

document.getElementById('rock').addEventListener('click', function() { clickHandler('rock'); });
document.getElementById('paper').addEventListener('click', function() { clickHandler('paper'); });
document.getElementById('scissors').addEventListener('click', function() { clickHandler('scissors'); });
