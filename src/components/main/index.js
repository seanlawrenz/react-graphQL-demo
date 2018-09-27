import React, { Component } from 'react';

import 'antd/dist/antd.css';
import WebhookList from 'components/webhook-list';
import { webhookIdGetter } from 'constants/helpers/webhookIdGetter';

import { Radio } from 'antd';
import { APIRequest } from 'constants/api';
import { ActiveSkeleton } from '../loading-skeletons';

import './styles.css';

const RadioGroup = Radio.Group;

const TYPE = {
  TICKET: 'ticket',
  ASSET: 'asset',
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.onTypeChange = this.onTypeChange.bind(this);
    this.deleteWebhook = this.deleteWebhook.bind(this);

    this.state = {
      loading: true,
      type: TYPE.TICKET, // starting with ticket
      webhookList: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
    setTimeout(() => { this.fetchData(); }, 2000);
    // this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type !== prevState.type) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async deleteWebhook(webhook) {
    this.setState({
      ...this.setState,
      loading: true,
    });

    const type = this.state.type === TYPE.TICKET ? 'TDTickets' : 'TDAssets';
    const webhookId = webhookIdGetter(webhook);
    const data = await APIRequest(1, type, 1, webhookId, 'DELETE', webhook);

    this.setState({
      ...this.state,
      loading: false,
      webhookList: data,
    });
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
        <div className="row">
          <nav className="buttonCellTop">
            <button className="btn btn-link tdx-react-no-text-decoration" type="button">
              <span className="fa fa-plus fa-nopad" aria-hidden="true"></span> New
              <span className="sr-only">Create New</span>
            </button>
          </nav>
          <h1 style={{ margin: '0.5em' }}>Webhooks example</h1>
        </div>
        {
          this.state.loading && (
            <div>
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
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
            <div>
              <WebhookList webhooks={this.state.webhookList} deleteWebhook={this.deleteWebhook} />
            </div>
          )
        }
      </div>
    );
  }
}

export default Main;
