import runPreloader from './js/components/preloader';
import globalVars from './js/globalVars/vars';
import CubeParams from './js/CubeParams';
import './scss/main.scss';
import gameCube from './templates/gameCube.hbs';

globalVars.emptyColumnsArr = { columnNo: 9, span: 2 };
globalVars.emptyRowsArr = { rowNo: 1, span: 1 };
console.log(globalVars.emptyColumnsArr);
console.log(globalVars.emptyRowsArr);
let cubesArr = [];
for (let i = 0; i < 10; i += 1) {
  let cube = new CubeParams();
  console.log(cube);
  cubesArr = [...cubesArr, cube];
}
const markup = gameCube(cubesArr);
console.log(markup);
document.querySelector('.game-board').innerHTML = markup;

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
