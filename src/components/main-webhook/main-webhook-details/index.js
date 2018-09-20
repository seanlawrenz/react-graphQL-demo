import React from 'react';
import PropTypes from 'prop-types';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import SSL from 'components/SSL';
import WebHookEvents from 'components/web-hook-events';

import './styles.css';

const MainWebhookDetails = (props) => {
  const { name, description, componentEventSelections } = props;

  return (
    <div className="container-fluid main-container">
      <h1>Webhooks example</h1>
      <div className="row">
        <div className="col-md-12">
          <h3>Webhooks/ Add webhook</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>We will send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" target="_blank">More information can be found in our developer documentation.</a></p>
        </div>
      </div>
      <NameAndDescription name={name} description={description} />
      <Payload />
      <SSL />
      <WebHookEvents componentEventSelections={componentEventSelections} />
    </div>
  );
};

MainWebhookDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  componentEventSelections: PropTypes.array.isRequired,
};

export default MainWebhookDetails;
