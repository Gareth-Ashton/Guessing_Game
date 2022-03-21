// parseInt() :
// Without using parseInt() for the prompt below, the value will return as a String
// even if you input a Number it will be changed into a string. 

// If you add parseInt() to the prompt, when you insert a letter or word, the return value will be NaN . If you insert a number into the prompt, the value output will be a number. 

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
  /* We use a while loop so that the prompt carries on until you enter a valid number. If you use an if statement, after you enter an invalid answer twice, the prompt will stop running, so its best to use WHILE LOOPS HERE */
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:")
  } else {
    guess = prompt("Too low! Enter a new guess:")
  }
}
if (guess === 'q') {
  console.log("OK, YOU QUITE!")
} else {
  console.log("CONGRATS YOU WIN!")
  console.log(`You got it! It took you ${attempts} guesses`)
};