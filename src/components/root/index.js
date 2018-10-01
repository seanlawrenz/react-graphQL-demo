import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { HashRouter, Route } from 'react-router-dom';
import Main from 'components/main';
import ErrorComponent from 'components/error';
import Webhook from 'components/webhook';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <div className="container-fluid">
        <Route exact path="/404" component={ErrorComponent} />
        <Route exact path="/" component={Main} />
        <Route path="/:_uri" component={Webhook} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
