/*eslint-disable*/
import _ from 'lodash';
/* eslint-enaable */
import './style.css';
import generatorOfEl from './generator';

const header = generatorOfEl('header', 'header', null, null, null, null);
const headerh1 = generatorOfEl('h1', null, null, 'leaderboard', null, null);
header.appendChild(headerh1);

const main = generatorOfEl('main', 'main-section', null, null, null, null);
const mainDiv = generatorOfEl('div', 'recent-scores', null, null, null, null);
const subDiv = generatorOfEl('div', 'recent-head', 'null', null, null, null);
const subDivh2 = generatorOfEl('h2', null, null, 'Recent scores', null, null);
const subDivbtn = generatorOfEl(
  'button',
  'refresh',
  'submit',
  'Refresh',
  null,
  null,
);
subDiv.appendChild(subDivh2);
subDiv.appendChild(subDivbtn);
mainDiv.appendChild(subDiv);

const scoreList = generatorOfEl('ul', 'score-list', null, null, null, null);
const scoreItem1 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph1 = generatorOfEl('p', null, null, 'Name:', null, null);
const span1 = generatorOfEl('span', null, null, '100', null, null);
paragraph1.appendChild(span1);
scoreItem1.appendChild(paragraph1);
scoreList.appendChild(scoreItem1);

const scoreItem2 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph2 = generatorOfEl('p', null, null, 'Name:', null, null);
const span2 = generatorOfEl('span', null, null, '20', null, null);
paragraph2.appendChild(span2);
scoreItem2.appendChild(paragraph2);
scoreList.appendChild(scoreItem2);

const scoreItem3 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph3 = generatorOfEl('p', null, null, 'Name:', null, null);
const span3 = generatorOfEl('span', null, null, '50', null, null);
paragraph3.appendChild(span3);
scoreItem3.appendChild(paragraph3);
scoreList.appendChild(scoreItem3);

const scoreItem4 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph4 = generatorOfEl('p', null, null, 'Name:', null, null);
const span4 = generatorOfEl('span', null, null, '78', null, null);
paragraph4.appendChild(span4);
scoreItem4.appendChild(paragraph4);
scoreList.appendChild(scoreItem4);

const scoreItem5 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph5 = generatorOfEl('p', null, null, 'Name:', null, null);
const span5 = generatorOfEl('span', null, null, '125', null, null);
paragraph5.appendChild(span5);
scoreItem5.appendChild(paragraph5);
scoreList.appendChild(scoreItem5);

const scoreItem6 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph6 = generatorOfEl('p', null, null, 'Name:', null, null);
const span6 = generatorOfEl('span', null, null, '77', null, null);
paragraph6.appendChild(span6);
scoreItem6.appendChild(paragraph6);
scoreList.appendChild(scoreItem6);

const scoreItem7 = generatorOfEl('li', 'score-item', null, null, null, null);
const paragraph7 = generatorOfEl('p', null, null, 'Name:', null, null);
const span7 = generatorOfEl('span', null, null, '42', null, null);
paragraph7.appendChild(span7);
scoreItem7.appendChild(paragraph7);
scoreList.appendChild(scoreItem7);

mainDiv.appendChild(scoreList);
main.appendChild(mainDiv);

const form = generatorOfEl('form', 'add-scores', null, null, null, null);
const formh2 = generatorOfEl('h2', null, null, 'Add your score', null, null);
const firstDiv = generatorOfEl('div', 'name', null, null, null, null);
const firstInput = generatorOfEl('input', 'name-input', 'text', null, 'Your name', 'name');
firstDiv.appendChild(firstInput);
form.appendChild(formh2);
form.appendChild(firstDiv);
const secondDiv = generatorOfEl('div', 'score', null, null, null, null);
const secondInput = generatorOfEl('input', 'name-input', 'text', null, 'Your score', 'score');
secondDiv.appendChild(secondInput);
form.appendChild(secondDiv);
const formbtn = generatorOfEl(
  'button',
  'submit-btn',
  'submit',
  'submit',
  null,
  null,
);
form.appendChild(formbtn);
main.appendChild(form);

const footer = generatorOfEl(
  'footer',
  'footer-section',
  null,
  null,
  null,
  null,
);

const wrapper = document.querySelector('.wrapper');
wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);