import runPreloader from './js/components/preloader';
import { Modal } from 'bootstrap';
import boardCubes from './js/globals/boardCubes';
import CountdownTimer from './js/components/CountdownTimer';
import getRandomInteger from './js/components/getRandom';
import options from './js/globals/options';
import points from './js/points';
import refs from './js/refs';
import ResultsTable from './js/ResultsTable';
import updateCubesMarkup from './js/view/updateCubesMarkup';
import './scss/main.scss';
import './images/opengraph.jpg';
import './images/favicon.png';

const resultsTable = new ResultsTable();
const resultPopup = new Modal(refs.resultPopup, {});

const gameOverHandler = () => {
  refs.points.textContent = '0';
  resultPopup.show();
  refs.resultPoints.textContent = points.points;
  refs.pause.disabled = true;
  refs.gameBoard.classList.add('blocked');
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetTime: options.timer,
  endHandler: gameOverHandler,
});

const boardClickHandler = ({ target, target: { dataset } }) => {
  if (target.nodeName !== 'LI') {
    return;
  }
  if (+dataset.clicks === 2) {
    dataset.clicks = 1;
    return;
  }
  if (+dataset.time !== 0) {
    timer.changeTime(dataset.time);
  }
  points.addPoints(dataset.points);
  boardCubes.removeCube(dataset.id);
  target.remove();
  // in case user's clicking '-time' cube, that ends the game
  if (!timer.isActive) {
    refs.points.textContent = '0';
    refs.resultPoints.textContent = points.points;
    return;
  }
  refs.points.textContent = points.points;
  boardCubes.updateFilledCoords();
  if (
    boardCubes.filledCoords.length >=
    0.9 * (options.rowsQuant * options.columnsQuant)
  ) {
    return;
  }
  if (boardCubes.cubes.length === 1) {
    updateCubesMarkup(10);
    return;
  }
  updateCubesMarkup(getRandomInteger(0, 2));
};

const newGameHandler = () => {
  if (timer.isActive) {
    timer.stop();
  }
  boardCubes.resetCubes();
  boardCubes.resetFilledCoords();
  points.resetPoints();
  refs.points.textContent = '0';
  updateCubesMarkup(options.startCubesAmount);
  refs.gameBoard.classList.remove('blocked');
  timer.start();
  if (refs.pause.dataset.state === 'paused') {
    refs.pause.dataset.state = 'started';
    refs.pause.textContent = 'Pause';
    refs.gameBoard.classList.remove('blocked');
  }
  if (refs.pause.disabled) {
    refs.pause.disabled = false;
  }
};

const pauseHandler = () => {
  refs.gameBoard.classList.toggle('blocked');
  if (refs.pause.dataset.state === 'started') {
    timer.pause();
    refs.pause.dataset.state = 'paused';
    refs.pause.textContent = 'Resume';
    return;
  }
  timer.play();
  refs.pause.dataset.state = 'started';
  refs.pause.textContent = 'Pause';
};

const resultSubmitHandler = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const result = {
    name: form.elements.name.value,
    score: points.points,
  };

  form.reset();
  resultPopup.hide();
  resultsTable.addPlayer(result);
  resultsTable.render();
};

refs.gameBoard.addEventListener('click', boardClickHandler);
refs.newGame.addEventListener('click', newGameHandler);
refs.pause.addEventListener('click', pauseHandler);
refs.resultForm.addEventListener('submit', resultSubmitHandler);

resultsTable.init();
