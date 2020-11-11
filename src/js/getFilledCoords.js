const getFilledCoords = (arr, coords, span) => {
  let filledCoords = arr;
  for (let i = 0; i <= span - 1; i += 1) {
    for (let j = 0; j <= span - 1; j += 1) {
      filledCoords = [...filledCoords, [coords[0] + i, coords[1] + j]];
    }
  }
  return filledCoords;
};

export default getFilledCoords;
