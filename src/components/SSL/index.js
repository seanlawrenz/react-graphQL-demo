import React from 'react';
import PropTypes from 'prop-types';

import { Radio } from 'antd';

import { radioStyle } from '../../theme/variables';

const RadioGroup = Radio.Group;

const SslVerification = (props) => {
  const { sslVerificationEnabled } = props;
  const onChange = (event) => {
    console.log(`Value is now ${event.target.value}`);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h4>SSL Verification</h4>
        <RadioGroup onChange={onChange} value={sslVerificationEnabled}>
          <Radio style={radioStyle} value={true}>Enable SSL Verification</Radio>
          <Radio style={radioStyle} className="text-danger" value={false}>Disable (not recommended)</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};

SslVerification.propTypes = {
  sslVerificationEnabled: PropTypes.bool.isRequired,
};

export default SslVerification;
