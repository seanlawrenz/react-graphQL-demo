import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { GET_WEBHOOKS } from 'graphql/queries';
import { DELETE_WEBHOOK } from 'graphql/mutations';

import * as remove from 'lodash/remove';

import { convertToCommonDateTime } from 'constants/dates/date-time';

export const WebhookListDetails = props => {
  const {
    webhookDetails: { webhookId, id, name, createdDate, modifiedDate, createdByUser, modifiedByUser },
  } = props;

  const commonCreatedDate = convertToCommonDateTime(createdDate);
  const commonModifiedDate = convertToCommonDateTime(modifiedDate);

  const updateWebhook = webhooks => {
    const data = remove(webhooks.edges, ({ node }) => node.id !== id);
    webhooks.edges = data;
    return webhooks;
  };

  return (
    <>
      <td>
        <button type="button" data-testid="new webhook" aria-label="create new webhook" className="btn btn-link">
          <Link to={`/webhook/${webhookId}`}>
            <span className="sr-only">Edit {name}</span>
            {name}
          </Link>
        </button>
      </td>
      <td>
        <span className="btn">{commonCreatedDate}</span>
      </td>
      <td>
        <span className="btn">{createdByUser.fullName}</span>
      </td>
      <td>
        <span className="btn">{commonModifiedDate}</span>
      </td>
      <td>
        <span className="btn">{modifiedByUser.fullName}</span>
      </td>
      <td>
        <Mutation
          mutation={DELETE_WEBHOOK}
          variables={{ id }}
          update={cache => {
            const { webhooks } = cache.readQuery({ query: GET_WEBHOOKS });
            cache.writeQuery({
              query: GET_WEBHOOKS,
              data: { webhooks: updateWebhook(webhooks) },
            });
          }}
        >
          {(deleteWebhook, { error }) => {
            if (error) return <p>Oh snap {error}</p>;
            return (
              <button
                type="button"
                aria-label="delete webhook"
                className="btn btn-link"
                data-testid="delete button"
                onClick={deleteWebhook}
              >
                <span className="fa fa-trash-o fa-lg fa-nopad fa-fw trash" />
              </button>
            );
          }}
        </Mutation>
      </td>
    </>
  );
};

WebhookListDetails.propTypes = {
  webhookDetails: PropTypes.object.isRequired,
};

export default WebhookListDetails;
