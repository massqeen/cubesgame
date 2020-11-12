import getFilledCoords from '../getFilledCoords';

const globalVars = {
  _colors: ['#0083c3', '#ffb400', '#ff0026', '#479b45', '#aaa'],
  _columnsQuant: 20,
  _rowsQuant: 20,
  _cubes: [],
  _filledCoords: [],

  get colors() {
    return this._colors;
  },
  get columnsQuant() {
    return this._columnsQuant;
  },
  get rowsQuant() {
    return this._rowsQuant;
  },

  get cubes() {
    return this._cubes;
  },
  set cubes(cubes) {
    this._cubes = [...this._cubes, ...cubes];
  },
  resetCubes() {
    this._cubes = [];
  },

  get filledCoords() {
    return this._filledCoords;
  },
  set filledCoords({ coords, span }) {
    this._filledCoords = getFilledCoords(
      this.filledCoords,
      coords[0],
      coords[1],
      span
    );
  },
};

export default globalVars;
