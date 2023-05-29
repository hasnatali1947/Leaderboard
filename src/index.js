import './style.css';
import Score from './modules/object.js';
import * as API from './modules/Api.js';

const scores = new Score();
const scoreCard = document.getElementById('scoreCard');
const nameInput = document.getElementById('nameinput');
const scoreInput = document.getElementById('scoreinput');
const refreshBtn = document.getElementById('Refresh');
const submitForm = document.querySelector('form');

const displayScores = () => {
  scoreCard.innerHTML = '';
  scores.score.forEach((e) => {
    scoreCard.innerHTML += `
      <ul class="ul">
        <li>${e.user}</li> : <li class="li">${e.score}</li>
      </ul>`;
  });
};

const refreshScores = async () => {
  const data = await API.get();
  scores.score = data.result;
  displayScores();
};

const submitFormHandler = (e) => {
  e.preventDefault();

  const user = nameInput.value;
  const score = scoreInput.value;
  if (user !== '' && score !== '') {
    scores.add(user, score);
    API.post({ user, score });
    displayScores();
    nameInput.value = '';
    scoreInput.value = '';
  } else {
    alert('Please enter both Username and Score.');
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  await refreshScores();
});

refreshBtn.addEventListener('click', async () => {
  await refreshScores();
});

submitForm.addEventListener('submit', submitFormHandler);
