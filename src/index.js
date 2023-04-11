import './style.css';
import Score from './modules/object.js';

const scores = new Score();

const scoreCard = document.getElementById('scoreCard');
const nameinput = document.getElementById('nameinput');
const scoreinput = document.getElementById('scoreinput');
const submitform = document.querySelector('form');

const display = () => {
  scoreCard.innerHTML = '';
  scores.score.forEach((e) => {
    scoreCard.innerHTML += `<ul class="ul">
              <li >${e.name}</li> : <li class="li">${e.scores}</li>
          </ul>`;
  });
};
display();

const adding = (e) => {
  e.preventDefault();
  const name = nameinput.value;
  const score = scoreinput.value;
  scores.add(name, score);
  display();
  nameinput.value = '';
  scoreinput.value = '';
};
submitform.addEventListener('submit', adding);
