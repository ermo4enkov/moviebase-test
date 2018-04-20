export function searchFilmsInCollection(value) {
  return dispatch => {
    return;
    dispatch(search(value));
  };
}

export function search(value) {
  return { type: 'SEARCH', value };
}

export default searchFilmsInCollection;
