const initialState = {
  error: '',
  fetching: false,
  films_collection: {},
  user: 'guest',
  page: 1,
  total_pages: 0,
};

// film fields: genre_ids[numbers],original_title, overview, popularity, poster_path, release_date
export default function State(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, fetching: true };
    case 'FETCH_REQUEST_SUCCESS':
      return {
        ...state,
        fetching: false,
        films_collection: action.payload['results'],
        page: action.payload['page'],
        total_pages: action.payload['total_pages'],
      };
    case 'SEARCH':
      const value = action.payload.toLowerCase();
      const result = state.films_collection.filter(element =>
        element['title'].toLowerCase().includes(value),
      );
      return { ...state, films_collection: result };
    case 'FETCH_REQUEST_ERROR':
      return { ...state, fetching: false };
    default:
      return state;
  }
}
