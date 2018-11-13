import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import WebHookEvents from 'components/web-hook-events';
import WebhookComponentDetails, { WebhookComponentDetailsWebhookComponent } from 'components/webhook-components';

import './styles.css';

export const webhookComponentDetails = gql`
  fragment WebhookDetails_webhook on webhook {
    name
    description
    payloadUrl
    secret
    sslVerificationEnabled
    allComponentEventsSelected
    webhookComponents: webhookOnWebhookComponents {
      edges {
        webhookComponent: node {
          id
          ...WebhookComponentDetails_webhookComponent
        }
      }
    }
  }
  ${WebhookComponentDetailsWebhookComponent}
`;

class WebhookDetails extends Component {
  constructor(props) {
    super(props);

    this.onWebhookChange = this.onWebhookChange.bind(this);

    const {
      webhook: { allComponentEventsSelected },
    } = this.props;
    this.state = {
      allComponentEventsSelected,
    };
  }

  onWebhookChange(data) {
    const { allComponentEventsSelected } = data;
    if (allComponentEventsSelected !== undefined) {
      this.setState({
        allComponentEventsSelected,
      });
    }
    const { onWebhookChange } = this.props;
    onWebhookChange(data);
  }

  render() {
    const {
      webhook: { name, description, payloadUrl, secret, sslVerificationEnabled, webhookComponents },
    } = this.props;
    const { allComponentEventsSelected } = this.state;
    const showDetails = !allComponentEventsSelected;

    return (
      <div className="gutter-top gutter-bottom">
        <NameAndDescription name={name} description={description} onChange={this.onWebhookChange} />
        <Payload payloadUrl={payloadUrl} secret={secret} sslVerificationEnabled={sslVerificationEnabled} onChange={this.onWebhookChange} />
        <WebHookEvents allComponentEventsSelected={allComponentEventsSelected} onChange={this.onWebhookChange} />
        {showDetails
          ? webhookComponents.edges.map(({ webhookComponent }) => (
            <div key={webhookComponent.id}>
              <WebhookComponentDetails webhookComponent={webhookComponent} />
            </div>
          ))
          : null}
      </div>
    );
  }
}

WebhookDetails.propTypes = {
  webhook: PropTypes.object.isRequired,
  onWebhookChange: PropTypes.func,
};

export default WebhookDetails;
