'use strict';

const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const againButton = document.querySelector('.again');
const body = document.querySelector('body');
const bigNumber = document.querySelector('.number');
const randomNumber = Math.floor(Math.random() * 21);

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess < 1) {
    message.textContent = '❌ Number input too low';
  } else if (guess > 20) {
    message.textContent = '🚫 Number input too high';
  } else {
    let currentScore = Number(score.textContent);

    if (guess > randomNumber) {
      message.textContent = '📈 Too high!';
      currentScore -= 1;
      score.textContent = currentScore;
    } else if (guess < randomNumber) {
      message.textContent = '📉 Too low!';
      currentScore -= 1;
      score.textContent = currentScore;
    } else if (guess === randomNumber) {
      message.textContent = '🎉 Correct number!';
      body.style.backgroundColor = 'green';
      checkButton.style.display = 'none';
      bigNumber.textContent = guess;
    }
  }
});

againButton.addEventListener('click', function () {
  location.reload();
  guessInput.value = '';
});
