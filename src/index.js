import runPreloader from './js/components/preloader';
import options from './js/globals/options';
import boardCubes from './js/globals/boardCubes';
import refs from './js/refs';
import './scss/main.scss';
import './images/favicon.png';
import updateCubesMarkup from './js/updateCubesMarkup';
import getRandomInteger from './js/components/getRandom';
import CountdownTimer from './js/components/CountdownTimer';

const boardClickHandler = ({ target }) => {
  if (target.nodeName === 'LI') {
    const id = target.dataset.id;
    boardCubes.removeCube(id);
    console.log('left cubes:', boardCubes.cubes);
    target.remove();
    boardCubes.updateFilledCoords();
    if (boardCubes.cubes.length === 1) {
      updateCubesMarkup(10);
      return;
    }
    updateCubesMarkup(getRandomInteger(0, 2));
  }
};

const startHandler = () => {
  updateCubesMarkup(options.startCubesAmount);
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetTime: 60000,
  });
  timer.start();
};

const newGameHandler = () => {
  console.log('NEW GAME');
};

refs.gameBoard.addEventListener('click', boardClickHandler);
refs.start.addEventListener('click', startHandler);
refs.newGame.addEventListener('click', newGameHandler);
// refs.swiperWrap.addEventListener('click', galleryClickHandler);
// refs.headNav.addEventListener('click', showLibraryHandler);
// refs.searchForm.addEventListener('submit', submitHandler);
// refs.sectionWatched.addEventListener('click', showSavedMovieFromGrade);
// refs.toTop.addEventListener('click', function () {
//   scrollToTop(30);
// });
// refs.headNav.addEventListener('click', showLibraryHandler);
// refs.sectionWatched.addEventListener('click', showSavedMovieFromGrade);
// window.addEventListener('scroll', throttle(isVisible, 500));
// refs.logo.addEventListener('click', logoHandler);
