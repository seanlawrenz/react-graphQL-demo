import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from 'components/main';
import ErrorComponent from 'components/error';


import 'antd/dist/antd.css';

const Root = () => (
  <HashRouter>
    <div className="container-fluid">
      <Route exact path="/404" component={ErrorComponent} />
      <Route exact path="/" component={Main} />

    </div>
  </HashRouter>
);

export default Root;
