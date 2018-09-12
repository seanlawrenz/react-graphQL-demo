import React, { Component } from 'react';

import { Radio } from 'antd';

import IndividualEventOptions from './individual-events';

import './styles.css';

const RadioGroup = Radio.Group;

const STATUS = {
  INDIVIDUAL_EVENTS: 'individual events',
  PUSH: 'push',
  EVERYTHING: 'everything',
};

class WebHookEvents extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      value: null,
    };
  }

  onChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
      showIndividualEventOptions: event.target.value === STATUS.INDIVIDUAL_EVENTS,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '2.5em',
      lineHeight: '2.5em',
    };

    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Events</h4>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value="push">Just the Push event.</Radio>
            <Radio style={radioStyle} value="everything">Send me everything</Radio>
            <Radio style={radioStyle} value="individual events">Let me select individual events.</Radio>
          </RadioGroup>
          {
            this.state.showIndividualEventOptions ? <IndividualEventOptions /> : null
          }
        </div>
      </div>
    );
  }
}

export default WebHookEvents;
