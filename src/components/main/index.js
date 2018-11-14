import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import WebhookList from 'components/webhook-list';
import WebhooksLoadingSkeleton from 'components/loading-skeletons/webhooks-loading';

import { GET_WEBHOOKS } from 'graphql/queries';

import './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.refetchData = this.refetchData.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Placeholder for the refetch method that comes back from query
  refetchData() {} // eslint-disable-line class-methods-use-this

  render() {
    return (
      <div className="gutter-bottom">
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/new" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-plus fa-nopad" aria-hidden="true" /> New
              <span className="sr-only">Create New</span>
            </Link>
            <button
              type="button"
              aria-label="refresh webhooks"
              className="btn btn-link tdx-react-no-text-decoration"
              onClick={() => this.refetchData()}
            >
              <span className="fa fa-refresh fa-nopad" aria-hidden="true" /> Refresh
            </button>
          </nav>
          <h1 style={{ margin: '0.5em' }}>Webhooks example</h1>
        </div>
        <Query query={GET_WEBHOOKS} notifyOnNetworkStatusChange>
          {({ loading, error, data, refetch, networkStatus }) => {
            if (loading || networkStatus === 4) return <WebhooksLoadingSkeleton />;
            if (error) return <p>Error</p>;
            this.refetchData = refetch;
            return (
              <>
                <WebhookList webhooks={data.webhooks} />
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Main;
