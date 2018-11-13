import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Link } from 'react-router-dom';

import { Button } from 'antd';

import WebhookLoadingSkeleton from 'components/loading-skeletons/webhook-loading';
import WebhookDetails, { webhookComponentDetails } from 'components/webhook-details';

import './styles.css';

const WebhookQuery = gql`
  query WebhookQuery($webhookId: Int!) {
    webhooks(filter: { operator: IsEqualTo, operands: [{ field: webhookId }, { integerValue: $webhookId }] }) {
      edges {
        node {
          ...WebhookDetails_webhook
        }
      }
    }
  }
  ${webhookComponentDetails}
`;

class Webhook extends Component {
  constructor(props) {
    super(props);

    this.editWebhook = this.editWebhook.bind(this);
    this.onWebhookChange = this.onWebhookChange.bind(this);
    const {
      match: {
        params: { _uri },
      },
    } = this.props;
    this.uri = parseInt(_uri, 10);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  editWebhook() {
    console.log(this.props);
  }

  onWebhookChange() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="gutter-bottom">
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-arrow-left fa-nopad" aria-hidden="true" /> Back
              <span className="sr-only">Go Back</span>
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Edit Webhook</h2>
            <Query
              query={WebhookQuery}
              variables={{
                webhookId: this.uri,
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return <WebhookLoadingSkeleton />;
                if (error) return <p>Oh snap</p>;
                console.log(data);
                return <WebhookDetails webhook={data.webhooks.edges[0].node} onWebhookChange={this.onWebhookChange} />;
              }}
            </Query>
            <Button onClick={this.editWebhook} className="gutter-right" type="primary" icon="save">
              Save
            </Button>
            <Link to="/">
              <Button data-testid="cancel-button" icon="stop">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Webhook.propTypes = {
  match: PropTypes.object,
};

export default Webhook;
