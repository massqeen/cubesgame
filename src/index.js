import runPreloader from './js/components/preloader';
import globalVars from './js/globalVars/vars';
import CubeParams from './js/CubeParams';
import './scss/main.scss';
import gameCube from './templates/gameCube.hbs';
import refs from './js/refs';

for (let i = 0; i < 3; i += 1) {
  let cube = new CubeParams();
  globalVars.filledCoords = { coords: cube.coords, span: cube.span };
  console.log('globalVars.filledCoords', globalVars.filledCoords);
  console.log(cube);
  globalVars.cubes = [cube];
  console.log('all cubes:', globalVars.cubes);
}
const markup = gameCube(globalVars.cubes);
refs.gameBoard.innerHTML = markup;

const boardClickHandler = ({ target }) => {
  if (target.nodeName === 'LI') {
    const cubes = globalVars.cubes;
    const id = target.dataset.id;
    const currFilledCoords = target.dataset.filled
      .split(',')
      .map((item) => +item);
    globalVars.resetCubes();
    globalVars.cubes = cubes.filter((item) => item.id !== id);
    console.log('left cubes:', globalVars.cubes);
    target.remove();
    // TODO filter global filled coords
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
