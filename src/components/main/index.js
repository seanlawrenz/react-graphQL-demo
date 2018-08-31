import React from 'react';
import PropType from 'prop-types';

import Payload from'../payload';
import SSL from '../SSL';

import './styles.css';

const Main = () => {
  return (

    <div className="container-fluid">
      <h1>Webhooks example</h1>
      <div className="row">
        <div className="col-md-12">          
          <h3>Webhooks/ Add webhook</h3>
        </div>          
      </div>
      <div className="row">
        <div className="col-md-12">
        <p>We'll send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" target="_blank">More information can be found in our developer documentation.</a></p>
        </div>
      </div>
      <form>
        <Payload />
        <SSL />
      </form>
    </div>
  );
}

export default Main;