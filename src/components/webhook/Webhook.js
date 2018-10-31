import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { Link } from 'react-router-dom';

import environment from 'constants/environment';
import { Button } from 'antd';

import WebhookLoadingSkeleton from 'components/loading-skeletons/webhook-loading';

import WebhookDetails from 'components/webhook-details/WebhookDetails';

import './styles.css';

const WebhookQuery = graphql`
  query WebhookQuery($Id: ID!) {
    node(id: $Id) {
      idu
      ...WebhookDetails_webhook
    }
  }
`;

class Webhook extends Component {
  constructor(props) {
    super(props);

    this.editWebhook = this.editWebhook.bind(this);
    const { match: { params: { _uri } } } = this.props;
    this.uri = _uri;
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

  render() {
    return (
      <div className="gutter-bottom">
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
            <h2>Edit Webhook</h2>
            <QueryRenderer
              environment={environment}
              query={WebhookQuery}
              variables={{
                Id: this.uri,
              }}
              render={({ error, props }) => {
                if (error) {
                  return <div>{error.message}</div>;
                }
                if (props) {
                  return <WebhookDetails webhook={props.node} />;
                }
                return <WebhookLoadingSkeleton />;
              }}
            />
            <Button onClick={this.editWebhook} className="gutter-right" type="primary" icon="save">Save</Button>
            <Link to="/"><Button icon="stop">Cancel</Button></Link>
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
