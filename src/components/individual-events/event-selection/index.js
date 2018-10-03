import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from 'antd';

// const EventSelection = Form.create({
//   onFieldsChange(props, changedFields) {
//     console.log('changedFields', changedFields);
//     const data = changedFieldsReducer(changedFields);
//     console.log('data', data);
//     props.onChange(data);
//   },
//   mapPropsToFields(props) {
//     return {
//       eventSelection:
//     }
//   }
// })

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

    this.props.onCheckmarkChecked(this.props.id, this.state.eventSelection);
  }

  render() {
    return (
      <Checkbox value={this.state.eventSelection.selected} key={this.state.eventSelection.id} onChange={this.onChange} checked={this.state.eventSelection.selected} >{this.state.eventSelection.label}</Checkbox>
    );
  }
}

EventSelection.propTypes = {
  eventSelection: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onCheckmarkChecked: PropTypes.func.isRequired,
};

export default EventSelection;
