'use strict';

let activePlayer = 0;
let roundeScore = 0;
const score = [0, 0];
let gamePlaying = true;

// document.querySelector('#current--' + activePlayer).textContent = dice;

newGame();

document.querySelector('.btn--roll').addEventListener('click', function () {
  // random number
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';

    diceDom.src = 'dice-' + dice + '.png';

    if (dice != 1) {
      // add to current
      roundeScore += dice;
      document.querySelector('#current--' + activePlayer).textContent =
        roundeScore;
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
    score[activePlayer] += roundeScore;

    document.querySelector('#score--' + activePlayer).textContent =
      score[activePlayer];

    nextPlayer();

    if (score[0] >= 10) {
      document.querySelector('#name--0').textContent = 'Winner!';
      gamePlaying = false;
    } else if (score[1] >= 10) {
      document.querySelector('#name--1').textContent = 'Winner!';
      gamePlaying = false;
    }
  }
});

function nextPlayer() {
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundeScore = 0;

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.dice').style.display = 'none';
}

function newGame() {
  document.querySelector('.dice').style.display = 'none';
  gamePlaying = true;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  activePlayer = 0;
  roundeScore = 0;
  score[0] = 0;
  score[1] = 0;
}

document.querySelector('.btn--new').addEventListener('click', function () {
  location.reload();
});
