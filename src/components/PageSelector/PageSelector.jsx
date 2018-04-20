import React, { Component } from 'react';

const PageSelector = props => {
  const { number, getFilmsCollection } = props;
  return <div className="PageSelector">{number}</div>;
};

export default PageSelector;
