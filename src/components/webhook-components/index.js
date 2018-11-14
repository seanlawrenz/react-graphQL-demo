import React from 'react';
import PropTypes from 'prop-types';

import IndividualEventOptions from 'components/individual-events/IndividualEventOptions';

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
