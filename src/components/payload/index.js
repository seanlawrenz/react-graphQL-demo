import React from 'react';
import PropType from 'prop-types';

import { changedFieldsReducer, changedFieldsValidating } from 'constants/helpers/changedFieldsReducer';
import { Form, Input, Radio } from 'antd';
import { radioStyle } from 'theme/variables';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const PayloadURL = Form.create({
  onFieldsChange(props, changedFields) {
    const validating = changedFieldsValidating(changedFields);
    const data = changedFieldsReducer(changedFields);
    if (validating) {
      props.onChange(data);
    }
  },
  mapPropsToFields(props) {
    return {
      payloadUrl: Form.createFormField({
        field: 'payloadUrl',
        value: props.payloadUrl,
      }),
      secret: Form.createFormField({
        field: 'secret',
        value: props.secret,
      }),
      sslVerificationEnabled: Form.createFormField({
        field: 'sslVerificationEnabled',
        value: props.sslVerificationEnabled,
      }),
    };
  },
})(props => {
  const {
    form: { getFieldDecorator },
  } = props;

  return (
    <Form layout="horizontal">
      <FormItem label="Payload URL">
        {getFieldDecorator('payloadUrl', {
          rules: [
            { required: true, message: 'The Payload URL is required' },
            {
              validator: (rule, value, cb) => {
                if (value.length > 4) {
                  return cb();
                }
                if (value === 'http') {
                  return props.sslVerificationEnabled === true ? cb(true) : cb();
                }
                return cb();
              },
              message: 'The url must be https if you want SSL Verification',
            },
          ],
        })(<Input autoComplete="new-password" />)}
      </FormItem>
      <FormItem label="Secret">
        {getFieldDecorator('secret', {
          rules: [{ required: true, message: 'Your secret password is required' }],
        })(<Input type="password" autoComplete="new-password" />)}
      </FormItem>
      <FormItem label="SSL Verification">
        {getFieldDecorator('sslVerificationEnabled')(
          // eslint-disable-line function-paren-newline
          <RadioGroup>
            <Radio style={radioStyle} value={true}>
              Enable SSL Verification
            </Radio>
            <Radio style={radioStyle} className="text-danger" value={false}>
              Disable (not recommended)
            </Radio>
          </RadioGroup>,
        ) // eslint-disable-line function-paren-newline
        }
      </FormItem>
    </Form>
  );
});

PayloadURL.propTypes = {
  payloadUrl: PropType.string,
  secret: PropType.string,
  onChange: PropType.func,
  sslVerificationEnabled: PropType.bool.isRequired,
};

export default PayloadURL;
