import './style.css';
// import addScore from './modules/addScores.js';
import Game from './modules/fetch.js';

document.addEventListener('DOMContentLoaded', () => {
  Game.displayScores();
});