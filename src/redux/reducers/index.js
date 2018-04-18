import { TOKEN, POPULAR_FILMS } from '../../utils/constants';
import request from '../../utils/request';

const initialState = {
  error: '',
  fetching: false,
  data: {},
  user: 'guest',
};

// film fields: genre_ids[numbers],original_title, overview, popularity, poster_path, release_date
export default function State(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, fetching: true };
    case 'FETCH_REQUEST_SUCCESS':
      return { ...state, fetching: false, data: action.payload };
    default:
      return state;
  }
}
