import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from 'components/main/Main';
import ErrorComponent from 'components/error';
// import Webhook from 'components/webhook';
import NewWebhook from 'components/new-webhook';

import 'antd/dist/antd.css';

const Root = () => (
  <HashRouter>
    <div className="container-fluid">
      <Route exact path="/404" component={ErrorComponent} />
      <Route exact path="/" component={Main} />
      {/* <Route path="/webhook/:_uri" component={Webhook} /> */}
      <Route path="/new" component={NewWebhook} />
    </div>
  </HashRouter>
);

export default Root;
