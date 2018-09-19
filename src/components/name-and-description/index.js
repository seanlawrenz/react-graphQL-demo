import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';

const { TextArea } = Input;

class NameAndDescription extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) { // eslint-disable-line class-methods-use-this
    console.log(event.target.value);
  }

  render() {
    const {
      name,
      description,
    } = this.props;

    return (
      <div className="form-group">
        <label htmlFor="webhookName">Webhook name</label>
        <Input name="webhookName" size="large" defaultValue={name} onChange={this.onChange} />
        <label style={{ marginTop: '0.5em' }} htmlFor="webhookDescription">Description</label>
        <TextArea rows={4} defaultValue={description} onChange={this.onChange} />
      </div>
    );
  }
}

NameAndDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default NameAndDescription;
