import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  componentDidUpdate() {
    this.props['data'].forEach(element => {
      console.log(element['title']);
    });
  }
  render() {
    return <div>fdfddf</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(MovieList);
