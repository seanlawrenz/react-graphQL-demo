import React from 'react';

import { Checkbox } from 'antd';

import './styles.css';

const CheckboxGroup = Checkbox.Group;

const IndividualEventOptions = () => {
  const onChange = (checkedValues) => {
    console.log('Checked values =', checkedValues);
  };

  const options = [
    { label: 'Created', value: 'Created' },
    { label: 'Changed', value: 'Changed' },
    { label: 'Deleted', value: 'Deleted' },
  ];

  return (
    <div className="row">
      <div className="col-md-12 checkbox-group">
        <CheckboxGroup options={options} onChange={onChange} />
      </div>
    </div>
  );
};

export default IndividualEventOptions;
