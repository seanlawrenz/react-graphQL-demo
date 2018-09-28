import React from 'react';
import PropTypes from 'prop-types';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import SSL from 'components/SSL';
import WebHookEvents from 'components/web-hook-events';

import './styles.css';

const WebhookDetails = (props) => {
  const { webhook: { name, description, payloadUrl, secret, sslVerificationEnabled, allComponentEventsSelected, componentEventSelections } } = props;

  return (
    <div className="gutter-top gutter-bottom">
      <NameAndDescription name={name} description={description} />
      <Payload payloadUrl={payloadUrl} secret={secret} />
      <SSL sslVerificationEnabled={sslVerificationEnabled} />
      <WebHookEvents allComponentEventsSelected={allComponentEventsSelected} componentEventSelections={componentEventSelections} />
    </div>
  );
};

WebhookDetails.propTypes = {
  webhook: PropTypes.object.isRequired,
};

export default WebhookDetails;
