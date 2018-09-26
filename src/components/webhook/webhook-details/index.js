import React from 'react';
import PropTypes from 'prop-types';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import SSL from 'components/SSL';
import WebHookEvents from 'components/web-hook-events';

import './styles.css';

const WebhookDetails = (props) => {
  const { name, description, componentEventSelections } = props;

  return (
    <div className="gutter-top">
      <NameAndDescription name={name} description={description} />
      <Payload />
      <SSL />
      <WebHookEvents componentEventSelections={componentEventSelections} />
    </div>
  );
};

WebhookDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  componentEventSelections: PropTypes.array.isRequired,
};

export default WebhookDetails;
