import fetch from 'cross-fetch';
import { GRAPHQL_API_URL } from 'config/graphqlAPI';

const { Environment, Network, RecordSource, Store } = require('relay-runtime');

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
});

const environment = new Environment({
  network,
  store,
});

export default environment;
