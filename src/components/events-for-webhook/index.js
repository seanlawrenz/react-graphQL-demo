import React, { Component } from 'react';

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const STATUS = {
  INDIVIDUAL_EVENTS: 'individual events',
  PUSH: 'push',
  EVERYTHING: 'everything',
};

class WebHookEvents extends Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

    this.state = {
      value: null,
    };
  }

  _onChange = (event) => {
    this.setState({
      ...this.state,
      value: event.target.value,
      showHello: event.target.value === STATUS.INDIVIDUAL_EVENTS,
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <h4>Events</h4>
          <RadioGroup onChange={this._onChange} value={this.state.value}>
            <Radio value={'push'}>Just the Push event.</Radio>
            <Radio value={'everything'}>Send me everything</Radio>
            <Radio value={'individual events'}>Let me select individual events.</Radio>
          </RadioGroup>
          {
            this.state.showHello ? <h4>Hello</h4> : null
          }
        </div>
      </div>
    )
  }
}

export default WebHookEvents;