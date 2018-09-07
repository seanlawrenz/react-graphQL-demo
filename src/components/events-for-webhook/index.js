import React, { Component } from 'react';

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class WebHookEvents extends Component {
  state = {
    value: 1,
  }

  onChange = (event) => {
    console.log('radio checked', event);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <h4>Events</h4>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Radio value={'push'}>Just the Push event.</Radio>
            <Radio value={'everything'}>Send me everything</Radio>
            <Radio value={'individual events'}>Let me select individual events.</Radio>
          </RadioGroup>
        </div>
      </div>
    )
  }
}

export default WebHookEvents;