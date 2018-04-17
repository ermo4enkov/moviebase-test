import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class Filters extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Slider />
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
          <RadioButton value="light" label="Simple" />
          <RadioButton value="light" label="Simple" />
        </RadioButtonGroup>
      </div>
    );
  }
}

export default Filters;
