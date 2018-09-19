import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from 'antd';

class EventSelection extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      eventSelection: this.props.eventSelection,
    };
  }

  onChange(event) {
    this.setState({
      ...this.state,
      eventSelection: {
        ...this.state.eventSelection,
        selected: event.target.checked,
      },
    });
  }

  render() {
    return (
      <Checkbox value={this.state.eventSelection.selected} key={this.state.eventSelection.id} onChange={this.onChange} checked={this.state.eventSelection.selected} >{this.state.eventSelection.label}</Checkbox>
    );
  }
}

EventSelection.propTypes = {
  eventSelection: PropTypes.object.isRequired,
};

export default EventSelection;
