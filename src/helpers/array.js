export const formatGridData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow += 1;
  }

  return data;
};

export const normalizeAuthorsArray = authors => authors.join(', ');

export const filterSearchByProp = (array = [], query = '', prop) => array
  .filter((element) => {
    if (element[prop]) {
      return element[prop]
        .toLowerCase()
        .includes(query.trim().toLowerCase());
    }

    return null;
  });
