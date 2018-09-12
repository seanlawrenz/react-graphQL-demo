import React from 'react';

const SslVerification = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h4>SSL Verification</h4>
        <div className="radio">
          <label htmlFor="sslRadios">
            <input type="radio" name="sslRadios" value="enable" defaultChecked={true} />
            <strong>Enable SSL Verification</strong>
          </label>
        </div>
        <div className="radio">
          <label htmlFor="sslRadios">
            <input type="radio" name="sslRadios" value="disable" />
            <span className="text-danger">Disable (not recommended)</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SslVerification;
