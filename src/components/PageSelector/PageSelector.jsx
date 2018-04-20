import React, { PureComponent } from 'react';

class PageSelector extends PureComponent {
  showList() {
    const { number, getFilmsCollection } = this.props;
    getFilmsCollection(number);
  }
  render() {
    const { number } = this.props;
    return (
      <div className="PageSelector" onClick={this.showList.bind(this)}>
        {number}
      </div>
    );
  }
}

export default PageSelector;
