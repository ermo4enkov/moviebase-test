import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
  findFilmByTitle(event) {
    const { searchFilmsInCollection } = this.props;
    searchFilmsInCollection(event.target.value);
  }
  render() {
    return <input type="text" onChange={this.findFilmByTitle.bind(this)} />;
  }
}

export default SearchInput;
