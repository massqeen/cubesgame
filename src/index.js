import runPreloader from './js/components/preloader';
import options from './js/globals/options';
import boardCubes from './js/globals/boardCubes';
import refs from './js/refs';
import './scss/main.scss';
import './images/favicon.png';
import updateCubesMarkup from './js/updateCubesMarkup';
import getRandomInteger from './js/components/getRandom';

updateCubesMarkup(options.startCubesAmount);

const boardClickHandler = ({ target }) => {
  if (target.nodeName === 'LI') {
    const id = target.dataset.id;
    boardCubes.removeCube(id);
    console.log('left cubes:', boardCubes.cubes);
    target.remove();
    boardCubes.updateFilledCoords();
    updateCubesMarkup(getRandomInteger(0, 2));
  }
};
refs.gameBoard.addEventListener('click', boardClickHandler);
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
