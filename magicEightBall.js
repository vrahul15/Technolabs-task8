// Step 1: Define userName
let userName = ''; // User can input their name here, e.g., 'Jane'

// Step 2: Ternary to greet the user
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Step 3: Define the question
let userQuestion = 'Will I ace my exams?'; // You can change this question
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

// Step 4: Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Step 5: Initialize the eightBall variable
let eightBall = '';

// Step 6: Control flow using switch to determine the eightBall response
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

// Step 7: Print the Magic Eight Ball's response
console.log(`The Magic Eight Ball says: ${eightBall}`);

