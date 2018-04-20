import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageSelector from '../../components/PageSelector';

import getFilmsCollection from '../../redux/actions/getFilmsCollection';
import { bindActionCreators } from 'redux';

class Pagination extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const { total_pages, page, getFilmsCollection } = this.props;
    const Select = () => {
      const res = [];
      if (total_pages > 0 && page < total_pages && page > 3) {
        for (let i = page - 3; i < page + 4; i++) {
          res.push(
            <PageSelector
              key={i}
              number={i}
              getFilmsCollection={getFilmsCollection}
            />,
          );
        }
      } else if (total_pages > 0 && page < total_pages && page === 2) {
        for (let i = page - 1; i < page + 4; i++) {
          res.push(<PageSelector key={i} number={i} />);
        }
      } else if (total_pages > 0 && page < total_pages && page === 1) {
        for (let i = page; i < page + 5; i++) {
          res.push(<PageSelector key={i} number={i} />);
        }
      } else if (total_pages > 0 && page === total_pages) {
        for (let i = page - 5; i < page + 1; i++) {
          res.push(<PageSelector key={i} number={i} />);
        }
      } else {
        return <div>sdsd</div>;
      }

      return res;
    };

    return (
      <div>
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
