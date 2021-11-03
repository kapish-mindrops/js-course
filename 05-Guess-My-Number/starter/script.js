'use strict';
// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// const secretNumber = Number(prompt('Enter Your Secret number'));

let score = 20;
let highscore = 0;

// Display massage
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌ No Number Entered');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Too High' : '📈 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
