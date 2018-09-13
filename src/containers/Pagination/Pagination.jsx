import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PageSelector from '../../components/PageSelector';
import './Pagination.css';

import getFilmsCollection from '../../redux/actions/getFilmsCollection';
import { bindActionCreators } from 'redux';

class Pagination extends PureComponent {
  render() {
    const { total_pages, page, getFilmsCollection } = this.props;
    const Select = () => {
      const res = [];
      if (total_pages > 0 && page <= total_pages) {
        for (let i = page - 3; i < page + 4; i++) {
          if (i < 1 || i > total_pages) {
            continue;
          }
          res.push(
            <PageSelector
              key={i}
              number={i}
              getFilmsCollection={getFilmsCollection}
            />,
          );
        }
      } else {
        return <div />;
      }

      return res;
    };

    return (
      <div className="pagination__wrap">
        <Select />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    total_pages: state.total_pages,
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilmsCollection: bindActionCreators(getFilmsCollection, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
