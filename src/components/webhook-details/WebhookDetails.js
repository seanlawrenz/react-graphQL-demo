import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import WebHookEvents from 'components/web-hook-events';
import WebhookComponentDetails from 'components/webhook-components/WebhookComponentDetails';

import './styles.css';

export class WebhookDetails extends Component {
  constructor(props) {
    super(props);

    this.onWebhookChange = this.onWebhookChange.bind(this);

    const { webhook: { AllComponentEventsSelected } } = this.props;
    this.state = {
      AllComponentEventsSelected,
    };
  }

  onWebhookChange(data) {
    const { allComponentEventsSelected } = data;
    if (allComponentEventsSelected !== undefined) {
      this.setState({
        AllComponentEventsSelected: allComponentEventsSelected,
      });
    }
    const { onWebhookChange } = this.props;
    onWebhookChange(data);
  }

  render() {
    const { webhook: { Name, Description, PayloadUrl, Secret, SslVerificationEnabled, webhookComponents } } = this.props;
    const { AllComponentEventsSelected } = this.state;
    const showDetails = !AllComponentEventsSelected;

    return (
      <div className="gutter-top gutter-bottom">
        <NameAndDescription name={Name} description={Description} onChange={this.onWebhookChange} />
        <Payload payloadUrl={PayloadUrl} secret={Secret} sslVerificationEnabled={SslVerificationEnabled} onChange={this.onWebhookChange} />
        <WebHookEvents allComponentEventsSelected={AllComponentEventsSelected} onChange={this.onWebhookChange} />
        {
          showDetails ? (
            webhookComponents.edges.map(({ webhookComponent }) => (
              <div key={webhookComponent.id}>
                <WebhookComponentDetails webhookComponent={webhookComponent} />
              </div>
            ))
          ) : (
            null
          )
        }
      </div>
    );
  }
}

WebhookDetails.propTypes = {
  webhook: PropTypes.object.isRequired,
  onWebhookChange: PropTypes.func,
};

export default createFragmentContainer(WebhookDetails, {
  webhook: graphql`
    fragment WebhookDetails_webhook on Webhook {
      Name
      Description
      PayloadUrl
      Secret
      SslVerificationEnabled
      AllComponentEventsSelected
      webhookComponents: WebhookOnWebhookComponents {
        edges {
          webhookComponent: node {
            id
            ...WebhookComponentDetails_webhookComponent
          }
        }
      }
    }
  `,
});
