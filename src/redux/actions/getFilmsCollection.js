import request from '../../utils/request';
import { POPULAR_FILMS } from '../../utils/constants';

export function getFilmsCollection(page) {
  return dispatch => {
    dispatch(fetchFilmsRequest());
    return request(`${POPULAR_FILMS}${page}`).then(response => {
      if (response.status === 200) {
        console.log('dsss');
        dispatch(fetchFilmsSuccess(response.data.result));
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
export default getFilmsCollection;
