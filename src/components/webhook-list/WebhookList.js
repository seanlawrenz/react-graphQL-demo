import React from 'react';
import PropTypes from 'prop-types';
import WebhookListDetails from './webhook-list-details/WebhookListDetails';

import './styles.css';

const WebhookList = props => {
  const { webhooks } = props;
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
                webhooks.map(({ node: webhook}) => (
                  <WebhookListDetails key={webhook.__id} webhookDetails={webhook} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

WebhookList.propTypes = {
  webhooks: PropTypes.array,
};

export default WebhookList;
