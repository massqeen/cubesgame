import globalVars from './globalVars/vars';
import getRandomInteger from './components/getRandom';
import getFilledCoords from './getFilledCoords';

class CubeParams {
  color = this.getColor();
  span = this.getSize();
  coords = this.getCoords();

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
    console.log('initial coords:', coords);
    const currFilledCells = getFilledCoords([], coords, this.span);
    console.log('currFilledCells:', currFilledCells);
    if (!this.isPlaceEmpty(currFilledCells)) {
      coords = this.changeCoords(coords);
      console.log('changed coords for:', coords);
    }
    return coords;
  }

  isPlaceEmpty(currFilledCells) {
    const flattenFilledCoords = globalVars.filledCoords.flat();
    const flattenFilledCells = currFilledCells.flat();
    console.log('flattened filled coords: ', flattenFilledCoords);
    for (let i = 0; i < flattenFilledCoords.length - 1; i += 2) {
      for (let j = 0; j < flattenFilledCells.length - 1; j += 2) {
        if (
          flattenFilledCells[j] === flattenFilledCoords[i] &&
          flattenFilledCells[j + 1] === flattenFilledCoords[i + 1]
        ) {
          console.log(
            `move block ${[flattenFilledCells[j], flattenFilledCells[j + 1]]}`
          );
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
    let currFilledCells = getFilledCoords([], [column, row], this.span);
    while (!this.isPlaceEmpty(currFilledCells)) {
      if (column < globalVars.columnsQuant - this.span + 1) {
        column += 1;
        currFilledCells = getFilledCoords([], [column, row], this.span);
        console.log('changed currFilledCells:', currFilledCells);
        console.log('empty:', this.isPlaceEmpty(currFilledCells));
      } else if (row < globalVars.rowsQuant - this.span + 1) {
        row += 1;
        column = 1;
        currFilledCells = getFilledCoords([], [column, row], this.span);
        console.log('changed currFilledCells:', currFilledCells);
        console.log('empty:', this.isPlaceEmpty(currFilledCells));
      } else {
        {
          row = 1;
          column = 1;
          currFilledCells = getFilledCoords([], [column, row], this.span);
          console.log('changed currFilledCells:', currFilledCells);
          console.log('empty:', this.isPlaceEmpty(currFilledCells));
        }
      }
    }

    return [column, row];
  }
}

export default CubeParams;
