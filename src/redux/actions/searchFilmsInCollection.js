export function searchFilmsInCollection(value) {
  console.log(value);
  return dispatch => {
    dispatch(searchFilm(value));
  };
}

function searchFilm(payload) {
  return { type: 'SEARCH', payload };
}

export default searchFilmsInCollection;
