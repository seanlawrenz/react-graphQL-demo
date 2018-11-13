import gql from 'graphql-tag';

export const DELETE_WEBHOOK = gql`
  mutation deleteWebhook($id: ID!) {
    deleteWebhook(id: $id) {
      edges {
        node {
          name
        }
      }
    }
  }
`;
