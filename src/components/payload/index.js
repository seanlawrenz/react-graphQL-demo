import React, { Component } from 'react';
import PropType from 'prop-types';

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
    return <option key={contentType.id}>{contentType.name}</option>
  })

  return(
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="payloadURL">Payload URL</label>
          <input type="text" className="form-control" name="payloadURL" placeholder="http://sean-is-cool.com/postreceive" />
        </div>

        <div className="form-group">
          <label htmlFor="content-type">Content Type</label>
          <select className="form-control" name="content-type">
            {contentTypesOptions}
          </select>
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
