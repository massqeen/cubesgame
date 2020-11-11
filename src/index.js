import runPreloader from './js/components/preloader';
import globalVars from './js/globalVars/vars';
import CubeParams from './js/CubeParams';
import './scss/main.scss';
import gameCube from './templates/gameCube.hbs';

// globalVars.emptyColumnsArr = { columnNo: 9, span: 2 };
// globalVars.emptyRowsArr = { rowNo: 1, span: 1 };
console.log('filledCoords:', globalVars.filledCoords);

let cubesArr = [];
for (let i = 0; i < 6; i += 1) {
  let cube = new CubeParams();
  globalVars.filledCoords = { coords: cube.coords, span: cube.span };
  console.log(cube);
  cubesArr = [...cubesArr, cube];
  console.log('all cubes:', cubesArr);
}
const markup = gameCube(cubesArr);
document.querySelector('.game-board').innerHTML = markup;
console.log('filledCoords:', globalVars.filledCoords);
// refs.gallery.addEventListener('click', galleryClickHandler);
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
