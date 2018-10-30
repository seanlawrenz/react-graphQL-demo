import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const WebhookListDetails = props => {
  const deleteWebhook = id => {
    console.log(id);
  };

  const {
    webhookDetails: { id, Name },
  } = props;
  return (
    <tr>
      <td>
        <Link to={`/webhook/${id}`} className="btn btn-link">
          <span className="sr-only">Edit {Name}</span>
          {Name}
        </Link>
      </td>
      <td>Creatfdklsjf;s</td>
      <td>hello sam</td>
      <td>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            deleteWebhook('id');
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
    }
  `,
});
