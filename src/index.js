import './style.css';
import Score from './modules/object.js';
import * as API from './modules/Api.js';

const scores = new Score();

const scoreCard = document.getElementById('scoreCard');
const nameinput = document.getElementById('nameinput');
const scoreinput = document.getElementById('scoreinput');
const Refresh = document.getElementById('Refresh');
const submitform = document.querySelector('form');

const display = () => {
  scoreCard.innerHTML = '';
  scores.score.forEach((e) => {
    scoreCard.innerHTML += `<ul class="ul">
                <li >${e.user}</li> : <li class="li">${e.score}</li>
            </ul>`;
  });
};
display();

Refresh.addEventListener('click', async () => {
  const data = await API.get();
  scores.score = data.result;
  display();
});

submitform.addEventListener('submit', ((e) => {
  e.preventDefault();

  const user = nameinput.value;
  const score = scoreinput.value;
  if (user !== '' && score !== '') {
    scores.add(user, score);
    API.post({ user, score });
    display();
    nameinput.value = '';
    scoreinput.value = '';
  } else {
    alert('please type both UserName and Score');
  }
}));

window.addEventListener('DOMContentLoaded', (async () => {
  const data = await API.get();
  scores.score = data.result;
  display();
}));