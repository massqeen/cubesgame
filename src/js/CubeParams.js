import globalVars from './globalVars/vars';
import getRandomInteger from './components/getRandom';
import getFilledCoords from './getFilledCoords';

class CubeParams {
  color = this.getColor();
  span = this.getSize();
  coords = this.getCoords();
  // column = this.getColumnNo();
  // row = this.getRowNo();

  getColor() {
    const colors = globalVars.colorsArr;
    return colors[getRandomInteger(0, colors.length - 1)];
  }
  getSize() {
    return getRandomInteger(1, 2);
  }
  getCoords() {
    const arr = [];
    arr.push(
      getRandomInteger(1, globalVars.columnsQuant),
      getRandomInteger(1, globalVars.rowsQuant)
    );
    const filledCells = getFilledCoords([], arr, this.span);
    console.log('cells filled: ', filledCells);
    this.isCoordsEmpty(filledCells);
    return arr;
  }

  isCoordsEmpty(filledCells) {
    const flattenFilledCoords = globalVars.filledCoords.flat();
    const flattenFilledCells = filledCells.flat();
    console.log('flattened filled coords: ', flattenFilledCoords);
    console.log('flattened filled cells: ', flattenFilledCells);
    for (let i = 0; i < flattenFilledCoords.length - 1; i += 2) {
      for (let j = 0; j < flattenFilledCells.length - 1; j += 2) {
        if (
          flattenFilledCells[j] === flattenFilledCoords[i] &&
          flattenFilledCells[j + 1] === flattenFilledCoords[i + 1]
        ) {
          console.log(
            `move block ${[flattenFilledCells[j], flattenFilledCells[j + 1]]}`
          );
        }
      }
    }
  }
  // getColumnNo() {
  //   return getRandomInteger(1, globalVars.columnsQuant);
  // }
  // getRowNo() {
  //   // const rowNo = getRandomInteger(1, globalVars.rowsQuant);
  //   return getRandomInteger(1, globalVars.rowsQuant);
  // }
  // removeEmptyCoords() {
  //   if (
  //     globalVars.emptyColumnsArr.includes(this.column) &&
  //     globalVars.emptyRowsArr.includes(this.row)
  //   ) {
  //     globalVars.emptyColumnsArr = { columnNo: this.column, span: this.span };
  //     globalVars.emptyRowsArr = { rowNo: this.row, span: this.span };
  //   }
  // }
}

export default CubeParams;
