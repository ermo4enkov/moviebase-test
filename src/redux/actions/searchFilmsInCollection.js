export function searchFilmsInCollection(value) {
  return dispatch => {
    dispatch(searchFilm(value));
  };
}

function searchFilm(payload) {
  return { type: 'SEARCH', payload };
}

function fetchFilmsSuccess(payload) {
  return {
    type: 'FETCH_REQUEST_SUCCESS',
    payload,
  };
}

export default searchFilmsInCollection;
