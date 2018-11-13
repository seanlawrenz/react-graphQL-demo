import ApolloClient from 'apollo-boost';
import { GRAPHQL_API_URL } from 'config/graphqlAPI';

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
});

export default client;
