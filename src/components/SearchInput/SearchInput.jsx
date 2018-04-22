import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
  findFilmByTitle(event) {
    const { searchFilmsInCollection } = this.props;
    console.log(event.target.value);
    searchFilmsInCollection(event.target.value);
  }
  render() {
    return <input type="text" onChange={this.findFilmByTitle.bind(this)} />;
  }
}

export default SearchInput;
