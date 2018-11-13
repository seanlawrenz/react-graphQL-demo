import gql from 'graphql-tag';

const WEBHOOK_LIST_DETAILS_FRAGMENT = gql`
  fragment WebhookListDetails_webhookDetails on webhook {
    id
    webhookId
    name
    createdDate
    modifiedDate
    createdByUser {
      fullName
    }
    modifiedByUser {
      fullName
    }
  }
`;

export const GET_WEBHOOKS = gql`
  query MainQuery {
    webhooks(first: 10) {
      edges {
        node {
          ...WebhookListDetails_webhookDetails
        }
      }
    }
  }
  ${WEBHOOK_LIST_DETAILS_FRAGMENT}
`;

const IndividualEventOptionsFragment = gql`
  fragment IndividualEventOptions_webhookComponentEvent on webhookComponentEvent {
    isSelected
    eventType
  }
`;

const WebhookComponentDetailsWebhookComponent = gql`
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

const webhookComponentDetails = gql`
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

export const GET_WEBHOOK = gql`
  query WebhookQuery($webhookId: Int!) {
    webhooks(filter: { operator: IsEqualTo, operands: [{ field: webhookId }, { integerValue: $webhookId }] }) {
      edges {
        node {
          ...WebhookDetails_webhook
        }
      }
    }
  }
  ${webhookComponentDetails}
`;
