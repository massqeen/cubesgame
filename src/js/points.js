const points = {
  _points: 0,
  get points() {
    return this._points;
  },
  set points(number) {
    this._points = number;
  },
  addPoints(value) {
    if (Number.isNaN(+value)) {
      return;
    }
    this.points += +value;
  },
  resetPoints() {
    this._points = 0;
  },
};

export default points;
