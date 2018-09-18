import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Radio } from 'antd';
import { ActiveSkeleton } from '../loading-skeletons';
import NameAndDescription from '../name-and-description';
import Payload from '../payload';
import SSL from '../SSL';
import WebHookEvents from '../web-hook-events';

import { ticketData } from '../../mock.ticket.data';
import { assetData } from '../../mock.asset.data';

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

    this.state = {
      loading: true,
      type: TYPE.TICKET, // starting with ticket
      webhook: {},
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchData();
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type !== prevState.type) {
      setTimeout(() => {
        this.fetchData();
      }, 2000);
    }
  }


  onTypeChange(event) {
    const type = event.target.value === 'ticket' ? TYPE.TICKET : TYPE.ASSET;
    this.setState({
      ...this.state,
      loading: true,
      type,
    });
  }

  fetchData() {
    const data = this.state.type === TYPE.TICKET ? ticketData : assetData;

    this.setState({
      ...this.state,
      webhook: data,
      loading: false,
    });
  }

  render() {
    const { name, description, componentEventSelections } = this.state.webhook;
    return (
      <div className="container-fluid main-container">
        <h1>Webhooks example</h1>
        <div className="row">
          <div className="col-md-12">
            <h3>Webhooks/ Add webhook</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RadioGroup onChange={this.onTypeChange} value={this.state.type}>
              <Radio value="ticket">Ticket</Radio>
              <Radio value="asset">Asset</Radio>
            </RadioGroup>
            <p>We will send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" target="_blank">More information can be found in our developer documentation.</a></p>
          </div>
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
          this.state.loading === false && (
            <div>
              <NameAndDescription name={name} description={description} />
              <Payload />
              <SSL />
              <WebHookEvents componentEventSelections={componentEventSelections} />
            </div>
          )
        }
      </div>
    );
  }
}

export default Main;
