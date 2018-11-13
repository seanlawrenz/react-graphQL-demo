import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import IndividualEventOptions, { IndividualEventOptionsFragment } from 'components/individual-events/IndividualEventOptions';

export const WebhookComponentDetailsWebhookComponent = gql`
  fragment WebhookComponentDetails_webhookComponent on webhookComponent {
    component {
      name
    }
    webhookComponentEvents: webhookComponentOnWebhookComponentEvents {
      edges {
        webhookComponentEvent: node {
          id
          ...IndividualEventOptions_webhookComponentEvent
        }
      }
    }
  }
  ${IndividualEventOptionsFragment}
`;

const WebhookComponentsDetails = props => {
  const {
    webhookComponent: {
      component: { name },
      webhookComponentEvents,
    },
  } = props;

  return (
    <div>
      <p>{name}</p>
      {webhookComponentEvents.edges.map(({ webhookComponentEvent }) => (
        <div key={webhookComponentEvent.id}>
          <IndividualEventOptions webhookComponentEvent={webhookComponentEvent} />
        </div>
      ))}
    </div>
  );
};

WebhookComponentsDetails.propTypes = {
  webhookComponent: PropTypes.object.isRequired,
};

// export default WebhookComponentsDetails;

export default WebhookComponentsDetails;
