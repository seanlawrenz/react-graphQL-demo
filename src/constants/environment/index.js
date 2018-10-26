import fetch from 'cross-fetch';

const { Environment, Network, RecordSource, Store } = require('relay-runtime');

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('graphql', {
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
