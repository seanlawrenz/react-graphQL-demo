import React from 'react';
import PropTypes from 'prop-types';

import { Form, Radio } from 'antd';

import { changedFieldsReducer } from 'constants/helpers/changedFieldsReducer';
import { radioStyle } from 'theme/variables';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const SslVerification = Form.create({
  onFieldsChange(props, changedFields) {
    const data = changedFieldsReducer(changedFields);
    props.onChange(data);
  },
  mapPropsToFields(props) {
    return {
      sslVerificationEnabled: Form.createFormField({
        field: 'sslVerificationEnabled',
        value: props.sslVerificationEnabled,
      }),
    };
  },
})((props) => {
  const { getFieldDecorator } = props.form;

  return (
    <Form layout="horizontal">
      <FormItem label="SSL Verification">
        {
          getFieldDecorator('sslVerificationEnabled')( // eslint-disable-line function-paren-newline
            <RadioGroup>
              <Radio style={radioStyle} value={true}>Enable SSL Verification</Radio>
              <Radio style={radioStyle} className="text-danger" value={false}>Disable (not recommended)</Radio>
            </RadioGroup>
          ) // eslint-disable-line function-paren-newline
        }
      </FormItem>
    </Form>
  );
});

SslVerification.propTypes = {
  sslVerificationEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SslVerification;
