'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');
const player = document.querySelector('.player');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
// ROLLING DICES

btnRoll.addEventListener('click', function() {
    if (playing) {
        console.log('btn clicked');
        const dice = Math.trunc(Math.random() * 6 + 1);
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});
btnHold.addEventListener('click', function() {
    if (playing) {
        console.log('btn clicked');
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});
btnNew.addEventListener('click', function() {
    console.log('button is really clicked');
    current0E1.textContent = 0;
    current1E1.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
});