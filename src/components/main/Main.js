import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from 'constants/environment';
import WebhookList from 'components/webhook-list/WebhookList';
import WebhookLoadingSkeleton from 'components/loading-skeletons/webhooks-loading';

// import { webhookIdGetter } from 'constants/helpers/webhookIdGetter';

import './styles.css';

const MainQuery = graphql`
  query MainQuery {
    viewer {
      ...WebhookList_viewer
    }
  }
`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.deleteWebhook = this.deleteWebhook.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  deleteWebhook(webhook) {
    // const uri = webhookIdGetter(webhook);
    // this.props.dispatch(deleteExistingWebhook(webhook, uri));
    console.log(this.props, webhook);
  }

  render() {
    return (
      <div className="gutter-bottom">
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/new" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-plus fa-nopad" aria-hidden="true"></span>
              New
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
            } else if (props) { // eslint-disable-line
              return <WebhookList viewer={props.viewer} />;
            }
            return <WebhookLoadingSkeleton />;
          }}
        />
      </div>
    );
  }
}

export default Main;
