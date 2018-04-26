import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
  constructor() {
    super();
    this.findFilmByTitle = this.findFilmByTitle.bind(this);
  }
  findFilmByTitle(event) {
    const { searchFilmsInCollection } = this.props;
    searchFilmsInCollection(event.target.value);
  }
  render() {
    return <input type="text" onChange={this.findFilmByTitle} />;
  }
}

export default SearchInput;
