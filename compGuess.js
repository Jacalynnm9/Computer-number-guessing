/* The goal of this program is to have the computer choose a random number,
and then see how many tries it takes for it to guess what that random number is*/

/* First I generate a number between 1 and 10,000 (though it could be any number)
upper stands for "upper limit of variable" */

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber (upper) {
	return Math.floor(Math.random() * upper ) +1;
}

/* Now, I generate a while loop so that the computer can make it's guesses
while also counting how many times it has guessed*/

while ( guess !== randomNumber ) {
	guess = getRandomNumber(upper);
	attempts += 1;
}

/*printing the random number and the amount of guesses made to the document*/

document.write("<p>The random number was " + randomNumber + ".</p>");
document.write("<p>It took the computer " + attempts + " tries to guess the correct number </p>");