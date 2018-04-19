import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageSelector from '../../components/PageSelector';

const Pagination = props => {
  const { total_pages } = props;
  const PageSelectors = total_pages => {
    if (total_pages < 1) {
      return null;
    }

    for (let i = 0; i < total_pages; i++) {
      <PageSelector key={i} number={i} />;
    }
  };

  return <div>{PageSelector()}</div>;
};

function mapStateToProps(state) {
  return {
    total_pages: state.total_pages,
  };
}

export default connect(mapStateToProps)(Pagination);
