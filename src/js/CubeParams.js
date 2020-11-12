import { v4 as uuidv4 } from 'uuid';
import globalVars from './globalVars/vars';
import getRandomInteger from './components/getRandom';
import getFilledCoords from './getFilledCoords';

class CubeParams {
  color = this.getColor();
  span = this.getSize();
  coords = this.getCoords();
  filledCoords = getFilledCoords([], this.coords[0], this.coords[1], this.span);
  id = uuidv4();

  getColor() {
    const colors = globalVars.colorsArr;
    return colors[getRandomInteger(0, colors.length - 1)];
  }

  getSize() {
    return getRandomInteger(1, 2);
  }

  getCoords() {
    let coords = [];
    coords.push(
      getRandomInteger(1, globalVars.columnsQuant - this.span + 1),
      getRandomInteger(1, globalVars.rowsQuant - this.span + 1)
    );

    const currFilledCoords = getFilledCoords(
      [],
      coords[0],
      coords[1],
      this.span
    );
    console.log('currFilledCoords:', currFilledCoords);
    if (!this.isPlaceEmpty(currFilledCoords)) {
      coords = this.changeCoords(coords);
      console.log('changed coords for:', coords);
    }
    return coords;
  }

  isPlaceEmpty(currFilledCoords) {
    const filledCoords = globalVars.filledCoords;

    for (let i = 0; i < filledCoords.length - 1; i += 2) {
      for (let j = 0; j < currFilledCoords.length - 1; j += 2) {
        if (
          currFilledCoords[j] === filledCoords[i] &&
          currFilledCoords[j + 1] === filledCoords[i + 1]
        ) {
          console.log('occupied');
          return false;
        }
      }
    }
    return true;
  }

  changeCoords(coords) {
    console.log('move to the right', coords);
    let column = coords[0];
    let row = coords[1];
    let currFilledCoords = getFilledCoords([], column, row, this.span);
    while (!this.isPlaceEmpty(currFilledCoords)) {
      if (column < globalVars.columnsQuant - this.span + 1) {
        column += 1;
        currFilledCoords = getFilledCoords([], column, row, this.span);
        console.log('changed currFilledCoords:', currFilledCoords);
        console.log('empty:', this.isPlaceEmpty(currFilledCoords));
      } else if (row < globalVars.rowsQuant - this.span + 1) {
        row += 1;
        column = 1;
        currFilledCoords = getFilledCoords([], column, row, this.span);
        console.log('changed currFilledCoords:', currFilledCoords);
        console.log('empty:', this.isPlaceEmpty(currFilledCoords));
      } else {
        {
          row = 1;
          column = 1;
          currFilledCoords = getFilledCoords([], column, row, this.span);
          console.log('changed currFilledCoords:', currFilledCoords);
          console.log('empty:', this.isPlaceEmpty(currFilledCoords));
        }
      }
    }
    return [column, row];
  }
}

export default CubeParams;
