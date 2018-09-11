import React, { Component } from 'react';

import './styles.css';

import { Radio } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button

const STATUS = {
  INDIVIDUAL_EVENTS: 'individual events',
  PUSH: 'push',
  EVERYTHING: 'everything',
};

class WebHookEvents extends Component {
  constructor(props) {
    super(props);

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
    const radioStyle = {
      display: 'block',
      height: '2.5em',
      lineHeight: '2.5em',
    }
    return(
      <div className="row">
        <div className="col-md-12">
          <h4>Events</h4>
          <RadioGroup onChange={this._onChange} value={this.state.value}>
            <Radio style={radioStyle} value={'push'}>Just the Push event.</Radio>
            <Radio style={radioStyle} value={'everything'}>Send me everything</Radio>
            <Radio style={radioStyle} value={'individual events'}>Let me select individual events.</Radio>
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