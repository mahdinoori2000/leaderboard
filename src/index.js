import './style.css';
// import addScore from './modules/addScores.js';
import Game from './modules/fetch.js';

const form = document.querySelector('form');
const displayData = () => {
  Game.displayScores();
};
document.addEventListener('DOMContentLoaded', displayData);
document.querySelector('.refresh-btn').addEventListener('click', displayData);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  Game.createScore();
  Game.emptyForm();
});