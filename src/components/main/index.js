import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import WebhookList from 'components/webhook-list';
import WebhooksLoadingSkeleton from 'components/loading-skeletons/webhooks-loading';

import './styles.css';

import { WEBHOOK_LIST_DETAILS_FRAGMENT } from 'components/webhook-list/webhook-list-details/WebhookListDetails';

const MainQuery = gql`
  query MainQuery {
    Webhooks(first: 10) {
      edges {
        node {
          ...WebhookListDetails_webhookDetails
        }
      }
    }
  }
  ${WEBHOOK_LIST_DETAILS_FRAGMENT}
`;

// const MainQuery = gql`
//   query MainQuery {
//     Webhooks(first: 10) {
//       edges {
//         node {
//           id
//           Name
//         }
//       }
//     }
//   }
// `;

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
        <Query
          query={MainQuery}
        >
          {
            ({ loading, error, data }) => {
              if (loading) return <WebhooksLoadingSkeleton />;
              if (error) return <p>Error</p>;
              return <WebhookList webhooks={data.Webhooks} />;
            }
          }
        </Query>
      </div>
    );
  }
}

export default Main;
