export function searchFilmsInCollection(value) {
  return dispatch => {
    value.length ? dispatch(searchFilm(value)) : dispatch(emptyField(value));
  };
}

function searchFilm(payload) {
  return { type: 'SEARCH_STARTED', payload };
}

function emptyField() {
  return { type: 'SEARCH_FINISHED' };
}

export default searchFilmsInCollection;
