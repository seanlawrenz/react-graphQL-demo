import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from 'components/main';
import './App.css';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HashRouter>
        <Main />
      </HashRouter>
    );
  }
}

export default App;
