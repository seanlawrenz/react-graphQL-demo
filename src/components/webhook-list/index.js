import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

import './styles.css';

const WebhookList = (props) => {
  const { webhooks } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        {
          webhooks.map((webhook) => {
            return <Card title={webhook.name} style={{ marginTop: '2em' }}></Card>;
          })
        }
      </div>
    </div>
  );
};

WebhookList.propTypes = {
  webhooks: PropTypes.array.isRequired,
};

export default WebhookList;
