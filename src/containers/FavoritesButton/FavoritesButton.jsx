import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import addFilmToFavorites from '../../redux/actions/addFilmToFavorites';
import { bindActionCreators } from 'redux';


export class FavoritesButton extends Component {
    constructor() {
        super();
    }

    addFilmToFav(number){
        console.log(number);
        const { addFilmToFavorites } = this.props;
        addFilmToFavorites(number);
    }

    render(){
        return <RaisedButton onClick={() => this.addFilmToFav(this.props.num)}>Add to favorites</RaisedButton>
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

export default connect(null, mapDispatchToProps)(FavoritesButton);