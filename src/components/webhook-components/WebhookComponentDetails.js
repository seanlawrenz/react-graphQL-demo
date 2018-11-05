import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const WebhookComponentsDetails = props => {
  const { webhookComponents } = props;
  console.log('Webhook component details', webhookComponents);
  return (
    <div>
      {
        webhookComponents.map(webhookComponent => (
          <p key={webhookComponent.node.id}>{webhookComponent.node.Component.Name}</p>
        ))
      }
    </div>
  );
};

WebhookComponentsDetails.propTypes = {
  webhookComponents: PropTypes.array.isRequired,
};

// export default WebhookComponentsDetails;

export default createFragmentContainer(WebhookComponentsDetails, {
  webhookComponents: graphql`
    fragment WebhookComponentDetails_webhookComponents on WebhookComponent @relay(plural: true) {
      id
      Component {
        id
        Name
      }
    }
  `,
});


// # WebhookComponentOnWebhookComponentEvents {
//   #   edges {
//   #     node {
//   #       ...IndividualEventOptions_componentEventSelections
//   #     }
//   #   }
//   # }
