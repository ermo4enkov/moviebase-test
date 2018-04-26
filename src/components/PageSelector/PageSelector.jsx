import React, { PureComponent } from 'react';

class PageSelector extends PureComponent {
  constructor() {
    super();
    this.showList = this.showList.bind(this);
  }
  showList() {
    const { number, getFilmsCollection } = this.props;
    getFilmsCollection(number);
  }
  render() {
    const { number } = this.props;
    return (
      <div className="PageSelector" onClick={this.showList}>
        {number}
      </div>
    );
  }
}

export default PageSelector;
