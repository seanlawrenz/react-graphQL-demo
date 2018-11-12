import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WebhookDetails from 'components/webhook-details';

import { Button } from 'antd';

class NewWebhook extends Component {
  constructor(props) {
    super(props);
    this.createWebhook = this.createWebhook.bind(this);
    this.onWebhookChange = this.onWebhookChange.bind(this);
  }

  createWebhook() {
    console.log(this.state);
  }

  onWebhookChange(data) {
    console.log(this.state, data);
  }

  render() {
    const newWebhookDefaults = {
      Name: '',
      Description: null,
      PayloadUrl: null,
      Secret: null,
      SslVerificationEnabled: true,
      AllComponentEventsSelected: true,
      webhookComponents: {
        edges: [
          {
            id: null,
            Component: {
              Name: null,
            },
            webhookComponent: {
              edges: [
                {
                  node: {
                    EventType: 'Created',
                    IsSelected: true,
                  },
                },
                {
                  node: {
                    EventType: 'Updated',
                    IsSelected: true,
                  },
                },
                {
                  node: {
                    EventType: 'Deleted',
                    IsSelected: true,
                  },
                },
              ],
            },
          },
        ],
      },
    };

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
          <div className="col-md-12">
            <h2>New Webhook</h2>
            <p>We will send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" rel="noopener noreferrer" target="_blank">More information can be found in our developer documentation.</a></p>
            <span>
              <WebhookDetails webhook={newWebhookDefaults} onWebhookChange={this.onWebhookChange} />
              <Button onClick={this.createWebhook} className="gutter-right" type="primary" icon="save">Save</Button>
              <Link to="/"><Button icon="stop">Cancel</Button></Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewWebhook;
