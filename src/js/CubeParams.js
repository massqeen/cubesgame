import { v4 as uuidv4 } from 'uuid';
import options from './globals/options';
import getRandomInteger from './components/getRandom';
import calcCubeFilledCoords from './calcCubeFilledCoords';
import boardCubes from './globals/boardCubes';

class CubeParams {
  color = this.getColor();
  span = this.getSize();
  coords = this.getCoords();
  filledCoords = calcCubeFilledCoords(
    [],
    this.coords[0],
    this.coords[1],
    this.span
  );
  id = uuidv4();
  points = this.getPoints();
  time = this.getTime();
  clicksToRemove = this.getClicksToRemove();

  getColor() {
    const colors = options.colors;
    return colors[getRandomInteger(0, colors.length - 1)];
  }

  getSize() {
    return getRandomInteger(1, 2);
  }

  getPoints() {
    const multiplier = this.span === 2 ? 1 : 2;
    let points;

    switch (this.color) {
      case options.colors[1]:
        points = 2 * multiplier;
        break;
      case options.colors[4]:
        points = 3 * multiplier;
        break;
      default:
        points = multiplier;
    }
    return points;
  }

  getTime() {
    if (this.color === options.colors[2]) {
      return 1000;
    }
    if (this.color === options.colors[3]) {
      return -2000;
    }
    return 0;
  }

  getClicksToRemove() {
    return this.color === options.colors[4] ? 2 : 1;
  }

  getCoords() {
    let coords = [];
    coords.push(
      getRandomInteger(1, options.columnsQuant - this.span + 1),
      getRandomInteger(1, options.rowsQuant - this.span + 1)
    );

    const currFilledCoords = calcCubeFilledCoords(
      [],
      coords[0],
      coords[1],
      this.span
    );
    if (!this.isPlaceEmpty(currFilledCoords)) {
      coords = this.changeCoords(coords);
    }
    return coords;
  }

  isPlaceEmpty(currFilledCoords) {
    const filledCoords = boardCubes.filledCoords;

    for (let i = 0; i < filledCoords.length - 1; i += 2) {
      for (let j = 0; j < currFilledCoords.length - 1; j += 2) {
        if (
          currFilledCoords[j] === filledCoords[i] &&
          currFilledCoords[j + 1] === filledCoords[i + 1]
        ) {
          return false;
        }
      }
    }
    return true;
  }

  changeCoords(coords) {
    let column = coords[0];
    let row = coords[1];
    let currFilledCoords = calcCubeFilledCoords([], column, row, this.span);
    while (!this.isPlaceEmpty(currFilledCoords)) {
      if (column < options.columnsQuant - this.span + 1) {
        column += 1;
        currFilledCoords = calcCubeFilledCoords([], column, row, this.span);
      } else if (row < options.rowsQuant - this.span + 1) {
        row += 1;
        column = 1;
        currFilledCoords = calcCubeFilledCoords([], column, row, this.span);
      } else {
        {
          row = 1;
          column = 1;
          currFilledCoords = calcCubeFilledCoords([], column, row, this.span);
        }
      }
    }
    return [column, row];
  }
}

export default CubeParams;
