import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from 'components/main';
import ErrorComponent from 'components/error';
import Webhook from 'components/webhook';
import './App.css';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <Route exact path="/404" component={ErrorComponent} />
          <Route exact path="/" component={Main} />
          <Route path="/:_uri" component={Webhook} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
