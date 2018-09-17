import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { ActiveSkeleton } from '../loading-skeletons';
import NameAndDescription from '../name-and-description';
import Payload from '../payload';
import SSL from '../SSL';
import WebHookEvents from '../web-hook-events';

import { ticketData } from '../../mock.ticket.data';

import './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      webhook: {},
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchData();
    }, 5000);
  }

  fetchData() {
    const {
      name,
      description,
      payloadUrl,
      contentType,
      secret,
      sslVerificationEnabled,
      selectAll,
      componentEventSelections,
      isActive,
    } = ticketData;

    this.setState({
      ...this.state,
      webhook: {
        name,
        description,
        payloadUrl,
        contentType,
        secret,
        sslVerificationEnabled,
        selectAll,
        componentEventSelections,
        isActive,
      },
      loading: false,
    });
  }

  render() {
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
            <p>We'll send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" target="_blank">More information can be found in our developer documentation.</a></p>
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
          this.state.loading !== true && (
            <div>
              <NameAndDescription name={this.state.webhook.name} description={this.state.webhook.description} />
              <Payload />
              <SSL />
              <WebHookEvents />
            </div>
          )
        }
      </div>
    );
  }
}

export default Main;
