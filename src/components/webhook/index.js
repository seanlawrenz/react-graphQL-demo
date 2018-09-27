import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { APIRequest } from 'constants/api';

import { ActiveSkeleton } from '../loading-skeletons';

import WebhookDetails from './webhook-details';

import './styles.css';

class Webhook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      webhook: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.mounted = true;
    setTimeout(() => { this.fetchData(); }, 2000);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async fetchData() {
    const { match: { params: { _uri } } } = this.props;
    const data = await APIRequest(1, 'TDTickets', 1, _uri);
    if (this.mounted) {
      this.setState({
        webhook: data,
        loading: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-arrow-left fa-nopad" aria-hidden="true"></span> Back
              <span className="sr-only">Go Back</span>
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12 gutter-top">
            <h2>Edit Webhook</h2>
            <p>We will send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" rel="noopener noreferrer" target="_blank">More information can be found in our developer documentation.</a></p>
            {
              this.state.loading && (
                <div>
                  <ActiveSkeleton paragraph={false} />
                  <ActiveSkeleton />
                  <ActiveSkeleton />
                  <ActiveSkeleton />
                  <ActiveSkeleton paragraph={false} />
                </div>
              )
            }
            {
              !this.state.loading && this.state.webhook && (
                <WebhookDetails name={this.state.webhook.name} description={this.state.webhook.description} componentEventSelections={this.state.webhook.componentEventSelections} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
// export PORT=4000

export default Webhook;
