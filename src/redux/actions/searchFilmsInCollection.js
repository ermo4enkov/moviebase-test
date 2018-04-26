export function searchFilmsInCollection(value) {
  return dispatch => {
    value.length ? dispatch(searchFilm(value)) : dispatch(emptyField(value));
  };
}

function searchFilm(payload) {
  return { type: 'SEARCH', payload };
}

function emptyField(payload) {
  return { type: 'SEARCH', payload };
}

export default searchFilmsInCollection;
