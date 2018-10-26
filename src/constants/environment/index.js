import fetch from 'cross-fetch';

const { Environment, Network, RecordSource, Store } = require('relay-runtime');

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('https://api.graph.cool/relay/v1/cjnagdaur1w8h0176mrm3fjxz', {
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
