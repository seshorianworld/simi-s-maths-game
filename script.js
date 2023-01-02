'use strict';
const numToAdd1 = document.getElementById('score--0');
const numToAdd2 = document.getElementById('score--2');
const optionA = document.querySelector('.option-a');
const optionB = document.querySelector('.option-b');
const score = document.getElementById('current--0');
const winModal = document.querySelector('.modal0');
const looseModal = document.querySelector('.modal1');
const overlay = document.querySelector('.overlay');
const btnContinue = document.querySelector('.btn--new');
const btnEnd = document.querySelector('.btn--end');
let scorePoint = 0;
let sumative1 = Math.trunc(Math.random() * 6);
let sumative2 = Math.trunc(Math.random() * 6);
numToAdd1.textContent = sumative1;
numToAdd2.textContent = sumative2;
let rightAnswer = function (a, b) {
  return a + b;
};
let correctAnswer = rightAnswer(sumative1, sumative2);
let wrongAnswer = Math.trunc(Math.random() * 10);
if (wrongAnswer === correctAnswer) {
  wrongAnswer = correctAnswer <= 5 ? correctAnswer + 2 : correctAnswer - 2;
}
let options = [correctAnswer, wrongAnswer];
const shuffle = function (min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
};
let print = shuffle(0, options.length - 1);
if (print === 0) {
  optionA.textContent = options[0];
  optionB.textContent = options[1];
} else {
  optionA.textContent = options[1];
  optionB.textContent = options[0];
}
optionA.addEventListener('click', function () {
  if (print === 0) {
    winModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    scorePoint = scorePoint + 1;
    score.textContent = scorePoint;
  } else {
    looseModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
});
optionB.addEventListener('click', function () {
  if (print !== 0) {
    winModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    scorePoint = scorePoint + 1;
    score.textContent = scorePoint;
  } else {
    looseModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
});
btnContinue.addEventListener('click', function () {
  winModal.classList.add('hidden');
  looseModal.classList.add('hidden');
  overlay.classList.add('hidden');
  sumative1 = Math.trunc(Math.random() * 6);
  sumative2 = Math.trunc(Math.random() * 6);
  numToAdd1.textContent = sumative1;
  numToAdd2.textContent = sumative2;
  correctAnswer = rightAnswer(sumative1, sumative2);
  wrongAnswer = Math.trunc(Math.random() * 10);
  if (wrongAnswer === correctAnswer) {
    wrongAnswer = correctAnswer <= 5 ? correctAnswer + 2 : correctAnswer - 2;
  }
  options = [correctAnswer, wrongAnswer];
  print = shuffle(0, options.length - 1);
  if (print === 0) {
    optionA.textContent = options[0];
    optionB.textContent = options[1];
  } else {
    optionA.textContent = options[1];
    optionB.textContent = options[0];
  }
});
btnEnd.addEventListener('click', function () {
  winModal.classList.add('hidden');
  looseModal.classList.add('hidden');
  overlay.classList.add('hidden');
  sumative1 = Math.trunc(Math.random() * 6);
  sumative2 = Math.trunc(Math.random() * 6);
  numToAdd1.textContent = sumative1;
  numToAdd2.textContent = sumative2;
  correctAnswer = rightAnswer(sumative1, sumative2);
  wrongAnswer = Math.trunc(Math.random() * 10);
  if (wrongAnswer === correctAnswer) {
    wrongAnswer = correctAnswer <= 5 ? correctAnswer + 2 : correctAnswer - 2;
  }
  options = [correctAnswer, wrongAnswer];
  print = shuffle(0, options.length - 1);
  if (print === 0) {
    optionA.textContent = options[0];
    optionB.textContent = options[1];
  } else {
    optionA.textContent = options[1];
    optionB.textContent = options[0];
  }
  scorePoint = 0;
  score.textContent = scorePoint;
});
