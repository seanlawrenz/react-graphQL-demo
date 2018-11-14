import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_API_URL } from 'config/graphqlAPI';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache,
});

export default client;
