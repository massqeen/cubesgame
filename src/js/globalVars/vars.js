const globalVars = {
  _colorsArr: ['#0083c3', '#ffb400', '#ff0026', '#479b45', '#aaa'],
  _columnsQuant: 10,
  _rowsQuant: 10,
  _emptyColumnsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  _emptyRowsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  get colorsArr() {
    return this._colorsArr;
  },
  get columnsQuant() {
    return this._columnsQuant;
  },
  get rowsQuant() {
    return this._rowsQuant;
  },
  get emptyColumnsArr() {
    return this._emptyColumnsArr;
  },
  set emptyColumnsArr({ columnNo, span }) {
    this._emptyColumnsArr = this.emptyColumnsArr.filter((item) => {
      if (item !== columnNo && item !== columnNo + span - 1) {
        return item;
      }
    });
  },
  get emptyRowsArr() {
    return this._emptyRowsArr;
  },
  set emptyRowsArr({ rowNo, span }) {
    this._emptyRowsArr = this.emptyRowsArr.filter((item) => {
      if (item !== rowNo && item !== rowNo + span - 1) {
        return item;
      }
    });
  },
};

export default globalVars;
