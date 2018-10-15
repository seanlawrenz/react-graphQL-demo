import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { webhookIdGetter } from 'constants/helpers/webhookIdGetter';

import './styles.css';

const WebhookList = (props) => {
  const { webhooks } = props;

  const deleteWebhook = (webhook) => {
    props.deleteWebhook(webhook);
  };

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
                webhooks.map((webhook) => {
                  const webhookId = webhookIdGetter(webhook);
                  return (
                    <tr key={webhookId}>
                      <td>
                        <Link to={`/webhook/${webhookId}`} className="btn btn-link">
                          <span className="sr-only">Edit {webhook.name}</span>{webhook.name}
                        </Link>
                      </td>
                      <td>Thurs 4/20/18 11:38 AM</td>
                      <td>Fri 4/21/18 2:45 PM</td>
                      <td className="text-center">
                        <button className="btn btn-link" onClick={() => { deleteWebhook(webhook); }}><span className="fa fa-trash-o fa-lg fa-nopad fa-fw trash"></span></button>
                      </td>
                    </tr>
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

WebhookList.propTypes = {
  webhooks: PropTypes.array.isRequired,
  deleteWebhook: PropTypes.func,
};

export default WebhookList;
