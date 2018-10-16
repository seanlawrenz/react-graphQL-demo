import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const WebhookListDetails = (props) => {
  const deleteWebhook = (id) => {
    console.log(id);
  };

  const { webhook: { id, name } } = props;
  return (
    <tr>
      <td>
        <Link to={`/webhook/${id}`} className="btn btn-link">
          <span className="sr-only">Edit {name}</span>{name}
        </Link>
      </td>
      <td>Thurs 4/20/18 11:38 AM</td>
      <td>Fri 4/21/18 2:45 PM</td>
      <td>
        <button type="button" className="btn btn-link" onClick={() => { deleteWebhook(id); }}><span className="fa fa-trash-o fa-lg fa-nopad fa-fw trash"></span></button>
      </td>
    </tr>
  );
};

WebhookListDetails.propTypes = {
  webhook: PropTypes.object.isRequired,
};

export default createFragmentContainer(WebhookListDetails, graphql`
  fragment WebhookListDetails_webhook on WebhookConfig {
    id
    name
  }
`);
