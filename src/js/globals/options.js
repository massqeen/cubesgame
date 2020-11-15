const options = {
  _startCubesAmount: 10,
  _colors: ['#a9bc48', '#479b45', '#d693d0', '#ff0026', '#3fd0d4'],
  _columnsQuant: 20,
  _rowsQuant: 20,
  _timer: 10000,

  get startCubesAmount() {
    return this._startCubesAmount;
  },
  get colors() {
    return this._colors;
  },
  get columnsQuant() {
    return this._columnsQuant;
  },
  get rowsQuant() {
    return this._rowsQuant;
  },
  get timer() {
    return this._timer;
  },
};

export default options;
