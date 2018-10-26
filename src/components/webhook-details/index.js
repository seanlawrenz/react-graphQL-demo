import React from 'react';
import PropTypes from 'prop-types';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import WebHookEvents from 'components/web-hook-events';
import IndividualEvents from 'components/individual-events';

import './styles.css';

const WebhookDetails = props => {
  const {
    webhook: { name, description, payloadUrl, secret, sslVerificationEnabled, allComponentEventsSelected, componentEventSelections },
  } = props;
  const onWebhookChange = data => props.onWebhookChange(data);

  return (
    <div className="gutter-top gutter-bottom">
      <NameAndDescription name={name} description={description} onChange={onWebhookChange} />
      <Payload payloadUrl={payloadUrl} secret={secret} sslVerificationEnabled={sslVerificationEnabled} onChange={onWebhookChange} />
      <WebHookEvents allComponentEventsSelected={allComponentEventsSelected} onChange={onWebhookChange} />
      {!allComponentEventsSelected && (
        <IndividualEvents componentEventSelections={componentEventSelections} onWebhookChange={onWebhookChange} />
      )}
    </div>
  );
};

WebhookDetails.propTypes = {
  webhook: PropTypes.object.isRequired,
  onWebhookChange: PropTypes.func.isRequired,
};

export default WebhookDetails;
