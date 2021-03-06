import CubeParams from '../CubeParams';
import boardCubes from '../globals/boardCubes';
import calcCubeFilledCoords from '../calcCubeFilledCoords';
import gameCube from '../../templates/gameCube.hbs';
import refs from '../refs';

const updateCubesMarkup = (n) => {
  for (let i = 0; i < n; i += 1) {
    let cube = new CubeParams();

    boardCubes.filledCoords = calcCubeFilledCoords(
      [],
      cube.coords[0],
      cube.coords[1],
      cube.span
    );
    boardCubes.cubes = [cube];
  }
  refs.gameBoard.innerHTML = gameCube(boardCubes.cubes);
};

export default updateCubesMarkup;
