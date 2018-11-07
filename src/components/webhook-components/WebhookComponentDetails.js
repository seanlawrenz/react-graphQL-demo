import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import IndividualEventOptions from 'components/individual-events/IndividualEventOptions';

const WebhookComponentsDetails = props => {
  const { webhookComponent: { Component: { Name }, webhookComponentEvents } } = props;

  return (
    <div>
      <p>{Name}</p>
      {
        webhookComponentEvents.edges.map(({ webhookComponentEvent }) => (
          <div key={webhookComponentEvent.id}>
            <IndividualEventOptions webhookComponentEvent={webhookComponentEvent} />
          </div>
        ))
      }
    </div>
  );
};

WebhookComponentsDetails.propTypes = {
  webhookComponent: PropTypes.object.isRequired,
};

// export default WebhookComponentsDetails;

export default createFragmentContainer(WebhookComponentsDetails, {
  webhookComponent: graphql`
    fragment WebhookComponentDetails_webhookComponent on WebhookComponent {
      Component {
        Name
      }
      webhookComponentEvents: WebhookComponentOnWebhookComponentEvents {
        edges {
          webhookComponentEvent: node {
            id
            ...IndividualEventOptions_webhookComponentEvent
          }
        }
      }
    }
  `,
});
