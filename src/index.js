/*eslint-disable*/
import _ from 'lodash';
/* eslint-enaable */
import './style.css';
import GetData from './getdata';
import postData from './postData';
import generatorOfEl from './generator';

const xhr = new XMLHttpRequest();
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6XXWCXn9VJxphtkrJMBV/scores/';

const refresh = document.querySelector('.refresh');
const domList = document.querySelector('.score-list');
const nameValue = document.querySelector('.name-input');
const scoreValue = document.querySelector('.score-input');
const form = document.querySelector('.add-scores');
const footerDate = document.querySelector('.date');

const scores = new GetData();

const displayEl = (object) => {
  object.forEach((obj) => {
    const li = generatorOfEl('li', 'score-item', null, null, null, null);
    const paragraph = generatorOfEl('p', null, null, `${obj.user}:`, null, null);
    const span = generatorOfEl('span', null, null, `${obj.score}`, null, null);
    paragraph.appendChild(span);
    li.appendChild(paragraph);
    domList.appendChild(li);
    if (domList.children.length > 0) {
      domList.classList.add('border-on');
    } else {
      domList.classList.remove('border-on');
    }
  })
}

refresh.addEventListener('click', () => {
  setTimeout(async () => {
    await scores.getScore();
    domList.innerHTML = '';
   displayEl(scores.scoreData); 
 }, 50);
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  postData(nameValue, scoreValue);
  form.reset();
})

// footer date
footerDate.innerHTML = new Date().getFullYear();
