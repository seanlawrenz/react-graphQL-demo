import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import WebhookListDetails from './webhook-list-details/WebhookListDetails';

import './styles.css';

const WebhookList = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="TDGridHeader">
                <th>Webhook name</th>
                <th>Date Created</th>
                <th>Last Modified</th>
                <th>Delete Webhook</th>
              </tr>
            </thead>
            <tbody>
              {
                props.viewer.allWebhookConfigs.edges.map(({ node }) => { // eslint-disable-line
                  return (
                    <WebhookListDetails key={node.__id} webhook={node} />
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default createFragmentContainer(WebhookList, graphql`
  fragment WebhookList_viewer on Viewer {
    allWebhookConfigs(first: 25, orderBy: name_ASC) @connection(key: "WebhookList_allWebhookConfigs", filters: []) {
      edges {
        node {
          ...WebhookListDetails_webhook
        }
      }
    }
  }
`);
