import React, { Component } from 'react';
import Root from 'components/root';
import configureStore from 'store/configureStore';

import './App.css';

const store = configureStore();

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Root store={store} />
    );
  }
}

export default App;
