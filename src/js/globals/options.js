const options = {
  _startCubesAmount: 10,
  _colors: ['#0083c3', '#ffb400', '#ff0026', '#479b45', '#aaa'],
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
