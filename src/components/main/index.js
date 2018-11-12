import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from 'constants/environment';
import WebhookList from 'components/webhook-list';
import WebhooksLoadingSkeleton from 'components/loading-skeletons/webhooks-loading';

// import { webhookIdGetter } from 'constants/helpers/webhookIdGetter';

import './styles.css';

const MainQuery = graphql`
  query MainQuery {
    Webhooks(first: 10) {
      edges {
        node {
          ...WebhookListDetails_webhookDetails
        }
      }
    }
  }
`;

class Main extends Component {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="gutter-bottom">
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/new" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-plus fa-nopad" aria-hidden="true" /> New
              <span className="sr-only">Create New</span>
            </Link>
          </nav>
          <h1 style={{ margin: '0.5em' }}>Webhooks example</h1>
        </div>
        <QueryRenderer
          environment={environment}
          query={MainQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            }
            if (props) {
              return <WebhookList webhooks={props.Webhooks.edges} />;
            }
            return <WebhooksLoadingSkeleton />;
          }}
        />
      </div>
    );
  }
}

export default Main;
