const boardCubes = {
  _cubes: [],
  _filledCoords: [],

  get cubes() {
    return this._cubes;
  },
  set cubes(cubes) {
    this._cubes = [...this._cubes, ...cubes];
  },
  removeCube(id) {
    const cubes = this.cubes;
    this.resetCubes();
    this.cubes = cubes.filter((cube) => cube.id !== id);
  },
  resetCubes() {
    this._cubes = [];
  },

  get filledCoords() {
    return this._filledCoords;
  },
  set filledCoords(arr) {
    this._filledCoords = [...this._filledCoords, ...arr];
  },
  updateFilledCoords() {
    let leftFilledCoords = [];
    this.cubes.forEach((cube) => {
      leftFilledCoords = [...leftFilledCoords, ...cube.filledCoords];
    });
    console.log('leftFilledCoords:', leftFilledCoords);
    this.resetFilledCoords();
    this.filledCoords = leftFilledCoords;
  },
  resetFilledCoords() {
    this._filledCoords = [];
  },
};

export default boardCubes;
