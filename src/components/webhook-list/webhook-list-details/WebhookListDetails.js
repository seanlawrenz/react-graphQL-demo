import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { convertToCommonDateTime } from 'constants/dates/date-time';

export const WebhookListDetails = props => {
  const deleteWebhook = id => {
    console.log(id);
  };

  const {
    webhookDetails: { id, Name, CreatedDate, ModifiedDate, CreatedByUserUser, ModifiedByUserUser },
  } = props;

  const commonCreatedDate = convertToCommonDateTime(CreatedDate);
  const commonModifiedDate = convertToCommonDateTime(ModifiedDate);

  return (
    <tr>
      <td>
        <button
          type="button"
          data-testid="new webhook"
          aria-label="create new webhook"
          className="btn btn-link"
        >
          <Link to={`/webhook/${id}`}>
            <span className="sr-only">Edit {Name}</span>
            {Name}
          </Link>
        </button>
      </td>
      <td>
        <span className="btn">{commonCreatedDate}</span>
      </td>
      <td>
        <span className="btn">{CreatedByUserUser.FullName}</span>
      </td>
      <td>
        <span className="btn">{commonModifiedDate}</span>
      </td>
      <td>
        <span className="btn">{ModifiedByUserUser.FullName}</span>
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
    </tr>
  );
};

WebhookListDetails.propTypes = {
  webhookDetails: PropTypes.object.isRequired,
};

export default createFragmentContainer(WebhookListDetails, {
  webhookDetails: graphql`
    fragment WebhookListDetails_webhookDetails on Webhook {
      id
      Name
      CreatedDate
      ModifiedDate
      CreatedByUserUser {
        FullName
      }
      ModifiedByUserUser {
        FullName
      }
    }
  `,
});
