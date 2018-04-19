import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';

const PageSelector = props => {
  return <div className="PageSelector">{props['number']}</div>;
};

export default PageSelector;
