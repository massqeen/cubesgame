import runPreloader from './js/components/preloader';
import options from './js/globals/options';
import boardCubes from './js/globals/boardCubes';
import refs from './js/refs';
import './scss/main.scss';
import './images/favicon.png';
import updateCubesMarkup from './js/updateCubesMarkup';
import getRandomInteger from './js/components/getRandom';
import points from './js/points';
import CountdownTimer from './js/components/CountdownTimer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetTime: options.timer,
  pause: refs.pause,
});

const boardClickHandler = ({ target }) => {
  if (target.nodeName !== 'LI' || !timer.isActive) {
    return;
  }
  const id = target.dataset.id;
  boardCubes.removeCube(id);
  console.log('left cubes:', boardCubes.cubes);
  points.addPoints(+target.dataset.points);
  refs.points.textContent = points.points;
  target.remove();
  boardCubes.updateFilledCoords();
  if (boardCubes.cubes.length === 1) {
    updateCubesMarkup(10);
    return;
  }
  updateCubesMarkup(getRandomInteger(0, 2));
};

const newGameHandler = () => {
  timer.stop();
  boardCubes.resetCubes();
  boardCubes.resetFilledCoords();
  points.resetPoints();
  updateCubesMarkup(options.startCubesAmount);
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

refs.gameBoard.addEventListener('click', boardClickHandler);
refs.newGame.addEventListener('click', newGameHandler);
refs.pause.addEventListener('click', pauseHandler);
