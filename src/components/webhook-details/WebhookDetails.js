import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import NameAndDescription from 'components/name-and-description';
import Payload from 'components/payload';
import WebHookEvents from 'components/web-hook-events';
// import IndividualEvents from 'components/individual-events/IndividualEventOptions';
import WebhookComponentDetails from 'components/webhook-components/WebhookComponentDetails';

import './styles.css';

const WebhookDetails = props => {
  const {
    webhook: { Name, Description, PayloadUrl, Secret, SslVerificationEnabled, AllComponentEventsSelected, WebhookOnWebhookComponents },
  } = props;

  console.log('webhook details', WebhookOnWebhookComponents.edges);

  const onWebhookChange = data => props.onWebhookChange(data);
  return (
    <div className="gutter-top gutter-bottom">
      <NameAndDescription name={Name} description={Description} onChange={onWebhookChange} />
      <Payload payloadUrl={PayloadUrl} secret={Secret} sslVerificationEnabled={SslVerificationEnabled} onChange={onWebhookChange} />
      <WebHookEvents allComponentEventsSelected={AllComponentEventsSelected} onChange={onWebhookChange} />
      {/* {!AllComponentEventsSelected && (
        <IndividualEvents componentEventSelections={WebhookOnWebhookComponents.edges.node} onWebhookChange={onWebhookChange} />
      )} */}
      <WebhookComponentDetails webhookComponents={WebhookOnWebhookComponents.edges} />
      {/* <IndividualEvents componentEventSelections={WebhookOnWebhookComponents.edges.node} onWebhookChange={onWebhookChange} /> */}
    </div>
  );
};

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
      WebhookOnWebhookComponents {
        edges {
          node {
            ...WebhookComponentDetails_webhookComponents @relay(mask: false)
          }
        }
      }
    }
  `,
});

// fragment WebhookDetails_webhook on Webhook {
//   Name
//   Description
//   PayloadUrl
//   Secret
//   SslVerificationEnabled
//   AllComponentEventsSelected
//   WebhookOnWebhookComponents {
//     edges {
//       node {
//         id
//         Component {
//           Name
//         }
//       }
//     }
//   }
// }

// export default createFragmentContainer(WebhookDetails, {
//   webhook: graphql`
//     fragment WebhookDetails_webhook on Webhook {
//       Name
//       Description
//       PayloadUrl
//       Secret
//       SslVerificationEnabled
//       AllComponentEventsSelected
//       WebhookOnWebhookComponents {
//         edges {
//           node {
//             ...WebhookComponent_webhookComponent
//           }
//         }
//       }
//     }
//   `,
// });
