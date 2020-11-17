import updateResultsTableMarkup from './view/updateResultsTableMarkup';

class ResultsTable {
  _results = [{ name: 'AI', score: 1, position: 1 }];

  get results() {
    return this._results;
  }
  set results(arr) {
    this._results = arr;
  }

  addPlayer({ name, score }) {
    const result = { name, score, position: null };
    this.results = [...this.results, result];
    this.results
      .sort((prev, next) => next.score - prev.score)
      .forEach((player, index) => (player.position = index + 1));

    this.saveResults();
  }

  loadResults() {
    const resultsString = localStorage.getItem('results');
    if (!resultsString) return;
    const results = JSON.parse(resultsString);
    this.results = [...results];
  }

  saveResults() {
    const results = JSON.stringify(this.results);
    localStorage.setItem('results', results);
  }

  render() {
    updateResultsTableMarkup(this.results);
  }

  init() {
    this.loadResults();
    this.render();
  }
}

export default ResultsTable;
