import request from '../../utils/request';
import { POPULAR_FILMS } from '../../utils/constants';

export function getFilmsCollection(page = 1) {
  return dispatch => {
    dispatch(fetchFilmsRequest());
    return request(`${POPULAR_FILMS}${page}`).then(response => {
      if (response.status === 200) {
        console.log(response['data']);
        dispatch(fetchFilmsSuccess(response['data']));
      } else {
        dispatch(fetchFilmsError());
      }
    });
  };
}

function fetchFilmsRequest() {
  return {
    type: 'FETCH_REQUEST',
  };
}

function fetchFilmsSuccess(payload) {
  return {
    type: 'FETCH_REQUEST_SUCCESS',
    payload,
  };
}

function fetchFilmsError() {
  return {
    type: 'FETCH_REQUEST_ERROR',
  };
}
export default getFilmsCollection;
