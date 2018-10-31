import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import WebHookEvents from 'components/web-hook-events';
import IndividualEvents from 'components/individual-events';

import './styles.css';

const WebhookDetails = props => {
  const {
    webhook: { Name, Description, PayloadUrl, Secret, SslVerificationEnabled},
  } = props;
  const onWebhookChange = data => props.onWebhookChange(data);

  return (
    <div className="gutter-top gutter-bottom">
      <NameAndDescription name={Name} description={Description} onChange={onWebhookChange} />
      <Payload payloadUrl={PayloadUrl} secret={Secret} sslVerificationEnabled={SslVerificationEnabled} onChange={onWebhookChange} />
      {/* <WebHookEvents allComponentEventsSelected={allComponentEventsSelected} onChange={onWebhookChange} />
      {!allComponentEventsSelected && (
        <IndividualEvents componentEventSelections={componentEventSelections} onWebhookChange={onWebhookChange} />
      )} */}
    </div>
  );
};

WebhookDetails.propTypes = {
  webhook: PropTypes.object.isRequired,
};

export default createFragmentContainer(WebhookDetails, {
  webhook: graphql`
    fragment WebhookDetails_webhook on Webhook {
      Name
      Description
      PayloadUrl
      Secret
      SslVerificationEnabled
    }
  `,
});
