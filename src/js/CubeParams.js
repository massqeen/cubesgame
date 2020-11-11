import globalVars from './globalVars/vars';
import getRandomInteger from './components/getRandom';

class CubeParams {
  color = this.getColor();
  span = this.getSize();
  column = this.getColumnNo();
  row = this.getRowNo();

  getColor() {
    const colors = globalVars.colorsArr;
    return colors[getRandomInteger(0, colors.length - 1)];
  }
  getSize() {
    return getRandomInteger(1, 2);
  }
  getColumnNo() {
    // const columnNo = getRandomInteger(1, globalVars.columnsQuant);
    return getRandomInteger(1, globalVars.columnsQuant);
  }
  getRowNo() {
    // const rowNo = getRandomInteger(1, globalVars.rowsQuant);
    return getRandomInteger(1, globalVars.rowsQuant);
  }
}

export default CubeParams;
