import React, { Component } from 'react';
import PropType from 'prop-types';

import { Select } from 'antd';

const Option = Select.Option;

const PayloadURL = () => {
  const contentTypes = [
    {
      id: 1,
      name: 'application/json'
    },
    {
      id: 2,
      name: 'application/x-www-form-urlencoded',
    },
  ];

  const contentTypesOptions = contentTypes.map((contentType) => {
    return <Option key={contentType.id} value={contentType.id}>{contentType.name}</Option>
  })

  const handelChange = (value) => {
    console.log(`selected ${value}`);
  }

  return(
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="payloadURL">Payload URL</label>
          <input type="text" className="form-control" name="payloadURL" placeholder="http://sean-is-cool.com/postreceive" />
        </div>

        <div className="form-group">
          <label htmlFor="content-type">Content Type</label>
          <Select defaultValue="" onChange={handelChange}>
            {contentTypesOptions}
          </Select>
        </div>

        <div className="form-group">
          <label htmlFor="secret">Secret</label>
          <input type="password" className="form-control" name="secret" />
        </div>
      </div>
    </div>
  );
}

export default PayloadURL;
