import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Main from 'components/main';
import ErrorComponent from 'components/error';
import Webhook from 'components/webhook';
import NewWebhook from 'components/new-webhook';

import 'antd/dist/antd.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="container-fluid">
        <Route exact path="/404" component={ErrorComponent} />
        <Route exact path="/" component={Main} />
        <Route path="/webhook/:_uri" component={Webhook} />
        <Route path="/new" component={NewWebhook} />
      </div>
    </HashRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
