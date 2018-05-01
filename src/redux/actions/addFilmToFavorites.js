export function addFilmToFavorites(value) {
    console.log(value);
    return dispatch => {
        dispatch(addFilm(value))
    };
}

function addFilm(payload) {
    return { type: 'ADD_FILM_TO_FAVORITES', payload };
}

export default addFilmToFavorites;

