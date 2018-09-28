import React from 'react';
import PropType from 'prop-types';

import { Input } from 'antd';

const PayloadURL = (props) => {
  const { payloadUrl, secret } = props;
  const handelChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="form-group gutter-top">
      <label htmlFor="payloadUrl">Payload URL</label>
      <Input name="payloadUrl" size="large" defaultValue={payloadUrl} onChange={handelChange} />
      <label htmlFor="secret">Secret</label>
      <Input name="secret" type="password" defaultValue={secret} onChange={handelChange} />
    </div>
  );
};

PayloadURL.propTypes = {
  payloadUrl: PropType.string,
  secret: PropType.string,
};

export default PayloadURL;
