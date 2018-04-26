import React, { PureComponent } from 'react';

class SearchInput extends PureComponent {
  constructor() {
    super();
  }
  findFilmByTitle(event) {
    const { searchFilmsInCollection } = this.props;
    searchFilmsInCollection(event.target.value);
  }
  render() {
    console.log(this.props);
    return <input type="text" onClick={this.findFilmByTitle.bind(this)} />;
  }
}

export default SearchInput;
