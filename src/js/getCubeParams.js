import globalVars from './globalVars/vars';
import getRandomInteger from './components/getRandom';

class cubeParams {
  getColor() {
    const colors = globalVars.colorsArr;
    return colors[getRandomInteger(0, colors.length)];
  }
  getSize() {
    return getRandomInteger(1, 2);
  }
  getColumnNo() {
    const columnNo = getRandomInteger(1, globalVars.columnsQuant);
  }
  getRowNo() {
    const RowNo = getRandomInteger(1, globalVars.rowsQuant);
  }
}

export default cubeParams;
