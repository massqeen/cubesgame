import getFilledCoords from '../getFilledCoords';

const globalVars = {
  _colorsArr: ['#0083c3', '#ffb400', '#ff0026', '#479b45', '#aaa'],
  _columnsQuant: 10,
  _rowsQuant: 10,
  // _emptyColumnsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  // _emptyRowsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  _filledCoords: [],

  get colorsArr() {
    return this._colorsArr;
  },
  get columnsQuant() {
    return this._columnsQuant;
  },
  get rowsQuant() {
    return this._rowsQuant;
  },
  get filledCoords() {
    return this._filledCoords;
  },
  set filledCoords({ coords, span }) {
    this._filledCoords = getFilledCoords(this.filledCoords, coords, span);
  },
  // get emptyColumnsArr() {
  //   return this._emptyColumnsArr;
  // },
  // set emptyColumnsArr({ columnNo, span }) {
  //   this._emptyColumnsArr = removeFilledCoords(
  //     this.emptyColumnsArr,
  //     columnNo,
  //     span
  //   );
  // },
  // get emptyRowsArr() {
  //   return this._emptyRowsArr;
  // },
  // set emptyRowsArr({ rowNo, span }) {
  //   this._emptyRowsArr = removeFilledCoords(this.emptyRowsArr, rowNo, span);
  // },
};

export default globalVars;
