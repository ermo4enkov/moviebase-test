import React, { Component } from 'react';

class PageSelector extends Component {
  showList() {
    const { number, getFilmsCollection } = this.props;
    console.log(number);
    getFilmsCollection(number);
  }
  render() {
    const { number, getFilmsCollection } = this.props;
    return (
      <div className="PageSelector" onClick={this.showList.bind(this)}>
        {number}
      </div>
    );
  }
}

export default PageSelector;
