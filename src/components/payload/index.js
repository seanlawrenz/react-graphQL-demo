import React from 'react';
import PropType from 'prop-types';

import { changedFieldsReducer } from 'constants/helpers/changedFieldsReducer';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const PayloadURL = Form.create({
  onFieldsChange(props, changedFields) {
    const data = changedFieldsReducer(changedFields);
    props.onChange(data);
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
    };
  },
})((props) => {
  const { getFieldDecorator } = props.form;

  return (
    <Form layout="horizontal">
      <FormItem label="Payload URL">
        {
          getFieldDecorator('payloadUrl', {
            rules: [{ required: true, message: 'The Payload URL is required' }],
          })(<Input />)
        }
      </FormItem>
      <FormItem label="Secret">
        {
          getFieldDecorator('secret', {
            rules: [{ required: true, message: 'Your secret password is required' }],
          })(<Input type="password" />)
        }
      </FormItem>
    </Form>
  );
});

PayloadURL.propTypes = {
  payloadUrl: PropType.string,
  secret: PropType.string,
  onChange: PropType.func,
};

export default PayloadURL;
