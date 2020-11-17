import resultsTableRow from '../../templates/resultsTableRow.hbs';
import refs from '../refs';

const updateResultsTableMarkup = (results) => {
  const topPlayersQuant = 10;
  if (!results.length) {
    return;
  }
  const topPlayers = results.slice(0, topPlayersQuant);
  refs.resultTable.innerHTML = resultsTableRow(topPlayers);
};

export default updateResultsTableMarkup;
