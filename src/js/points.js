const points = {
  _points: 0,
  get points() {
    return this._points;
  },
  set points(number) {
    this._points = number;
  },
  addPoints(number) {
    this.points += number;
  },
  resetPoints() {
    this._points = 0;
  },
};

export default points;
