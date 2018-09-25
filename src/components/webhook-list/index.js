import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import split from 'lodash/split';
import last from 'lodash/last';

import './styles.css';

const WebhookList = (props) => {
  const { webhooks } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <tbody>
              {
                webhooks.map((webhook) => {
                  const webhookId = last(split(webhook._uri, '/'));
                  return (
                    <tr key={webhookId}>
                      <td>
                        <Link to={`/${webhookId}`} className="btn btn-link">
                          <span className="sr-only">Edit {webhook.name}</span>{webhook.name}
                        </Link>
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
};

export default WebhookList;
