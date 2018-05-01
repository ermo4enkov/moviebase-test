import React, { Component } from 'react';
import { connect } from 'react-redux';


export class FavoritesButton extends Component {
    constructor() {
        super();
        this.addFilmToFavorites = this.addFilmToFavorites.bind(this);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addFilmToFavorites: addFilmToFavorites,
        },
        dispatch,
    );
}

export default connect(mapStateToProps)(FavoritesButton);