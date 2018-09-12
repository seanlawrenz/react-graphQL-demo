import React from 'react';

import { Radio } from 'antd';

import { radioStyle } from '../../theme/variables';

const RadioGroup = Radio.Group;

const SslVerification = () => {
  const onChange = (event) => {
    console.log(`Value is now ${event.target.value}`);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h4>SSL Verification</h4>
        <RadioGroup onChange={onChange}>
          <Radio style={radioStyle} value="enable">Enable SSL Verification</Radio>
          <Radio style={radioStyle} className="text-danger" value="disable">Disable (not recommended)</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};

export default SslVerification;
