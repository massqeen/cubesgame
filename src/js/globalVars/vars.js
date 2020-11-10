const globalVars = {
  _colorsArr: ['#0083c3', '#ffb400', '#ff0026', '#479b45', '#aaa'],
  _columnsQuant: 10,
  _rowsQuant: 10,
  _emptyColumnsArr: [],
  _emptyRowsArr: [],

  get colorsArr() {
    return this._colorsArr;
  },
  get columnsQuant() {
    return this._columnsQuant;
  },
  get rowsQuant() {
    return this._rowsQuant;
  },
};

export default globalVars;
