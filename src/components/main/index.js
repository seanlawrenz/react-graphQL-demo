import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { APIRequest } from 'constants/api';
import { ActiveSkeleton } from '../loading-skeletons';

const RadioGroup = Radio.Group;

const TYPE = {
  TICKET: 'ticket',
  ASSET: 'asset',
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.onTypeChange = this.onTypeChange.bind(this);

    this.state = {
      loading: true,
      type: TYPE.TICKET, // starting with ticket
      webhookList: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type !== prevState.type) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onTypeChange(event) {
    const type = event.target.value === 'ticket' ? TYPE.TICKET : TYPE.ASSET;
    this.setState({
      ...this.state,
      loading: true,
      type,
    });
  }

  async fetchData() {
    const type = this.state.type === TYPE.TICKET ? 'TDTickets' : 'TDAssets';
    const data = await APIRequest(1, type, 1, '');
    if (this.mounted) {
      this.setState({
        loading: false,
        webhookList: data,
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <RadioGroup onChange={this.onTypeChange} value={this.state.type}>
            <Radio value="ticket">Ticket</Radio>
            <Radio value="asset">Asset</Radio>
          </RadioGroup>
        </div>
        {
          this.state.loading && (
            <div>
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton />
              <ActiveSkeleton />
              <ActiveSkeleton paragraph={false} />
            </div>
          )
        }
        {
          !this.state.loading && !this.state.webhookList && (
            <h2>Could not load any webhooks</h2>
          )
        }
        {
          !this.state.loading && this.state.webhookList && (
            this.state.webhookList.map(webhook => <span key={webhook.uri}><h3>{webhook.name}</h3><br /></span>)
          )
        }
      </div>
    );
  }
}

export default Main;
