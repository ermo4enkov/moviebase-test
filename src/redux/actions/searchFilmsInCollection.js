export function searchFilmsInCollection(value) {
  return dispatch => {
    return dispatch(searchFilm(value));
  };
}

function searchFilm(payload) {
  return { type: 'SEARCH', payload };
}

export default searchFilmsInCollection;
