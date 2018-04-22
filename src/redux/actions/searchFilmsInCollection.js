export function searchFilmsInCollection(value) {
  return dispatch => {
    return dispatch(searchFilm(value));
  };
}

export function searchFilm(payload) {
  return { type: 'SEARCH', payload };
}

export default searchFilmsInCollection;
