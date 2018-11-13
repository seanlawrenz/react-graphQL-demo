import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

import { convertToCommonDateTime } from 'constants/dates/date-time';

export const webhookListWebhook = gql`
  fragment WebhookListDetails_webhookDetails on webhook {
    id
    webhookId
    name
    createdDate
    modifiedDate
    createdByUser {
      fullName
    }
    modifiedByUser {
      fullName
    }
  }
`;

export const WebhookListDetails = props => {
  const deleteWebhook = id => {
    console.log(id);
  };

  const {
    webhookDetails: { webhookId, id, name, createdDate, modifiedDate, createdByUser, modifiedByUser },
  } = props;

  const commonCreatedDate = convertToCommonDateTime(createdDate);
  const commonModifiedDate = convertToCommonDateTime(modifiedDate);

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
        <button
          type="button"
          aria-label="delete webhook"
          className="btn btn-link"
          data-testid="delete button"
          onClick={() => {
            deleteWebhook(id);
          }}
        >
          <span className="fa fa-trash-o fa-lg fa-nopad fa-fw trash" />
        </button>
      </td>
    </>
  );
};

WebhookListDetails.propTypes = {
  webhookDetails: PropTypes.object.isRequired,
};

export default WebhookListDetails;
