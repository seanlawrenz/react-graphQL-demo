import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Radio } from 'antd';
import { radioStyle } from 'theme/variables';

import IndividualEventOptions from './individual-events';

import './styles.css';

const RadioGroup = Radio.Group;
const STATUS = {
  INDIVIDUAL_EVENTS: 'individual events',
  EVERYTHING: 'everything',
};

class WebHookEvents extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {};
  }

  onChange(event) {
    this.setState({
      ...this.state,
      showIndividualEventOptions: event.target.value === STATUS.INDIVIDUAL_EVENTS,
    });
  }

  render() {
    const { allComponentEventsSelected, componentEventSelections } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Events</h4>
          <RadioGroup onChange={this.onChange} value={allComponentEventsSelected}>
            <Radio style={radioStyle} value="everything">Send me everything</Radio>
            <Radio style={radioStyle} value="individual events">Let me select individual events.</Radio>
          </RadioGroup>
          {
            this.state.showIndividualEventOptions ? <IndividualEventOptions componentEventSelections={componentEventSelections} /> : null
          }
        </div>
      </div>
    );
  }
}

WebHookEvents.propTypes = {
  allComponentEventsSelected: PropTypes.bool.isRequired,
  componentEventSelections: PropTypes.array,
};

export default WebHookEvents;
