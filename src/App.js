import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from 'constants/client';
import Root from 'components/root';

import './App.css';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    );
  }
}

export default App;
