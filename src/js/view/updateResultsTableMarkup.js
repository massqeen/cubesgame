import resultsTableRow from '../../templates/resultsTableRow.hbs';
import refs from '../refs';

const updateResultsTableMarkup = (results) => {
  console.log(results);
  const topPlayersQuant = 10;
  if (!results.length) {
    return;
  }

  const topPlayers = results.slice(0, topPlayersQuant);

  refs.resultTable.innerHTML = resultsTableRow(topPlayers);

  // if (lastGameData) {
  //   const lastGameResult = membersList.find(
  //     (member) =>
  //       member.name === lastGameData.name && member.score === lastGameData.score
  //   );
  //   rootRef.insertAdjacentHTML(
  //     'beforeend',
  //     lastResultItemOfHallOfFame(lastGameResult)
  //   );
  // }
};

export default updateResultsTableMarkup;
