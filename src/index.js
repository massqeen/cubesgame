import runPreloader from './js/components/preloader';
import globalVars from './js/globalVars/vars';
import CubeParams from './js/CubeParams';
import gameCube from './templates/gameCube.hbs';
import refs from './js/refs';
import './scss/main.scss';
import './images/favicon.png';
import calcCubeFilledCoords from './js/calcCubeFilledCoords';

for (let i = 0; i < 10; i += 1) {
  let cube = new CubeParams();

  globalVars.filledCoords = calcCubeFilledCoords(
    [],
    cube.coords[0],
    cube.coords[1],
    cube.span
  );
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
    console.log('currFilledCoords', currFilledCoords);
    globalVars.resetCubes();
    globalVars.cubes = cubes.filter((cube) => cube.id !== id);
    console.log('left cubes:', globalVars.cubes);
    target.remove();
    let leftFilledCoords = [];
    globalVars.cubes.forEach((cube) => {
      leftFilledCoords = [...leftFilledCoords, ...cube.filledCoords];
    });
    console.log('leftFilledCoords:', leftFilledCoords);
    globalVars.resetFilledCoords();
    globalVars.filledCoords = leftFilledCoords;
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
