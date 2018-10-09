import React from 'react';
import PropTypes from 'prop-types';

import { changedFieldsReducer } from 'constants/helpers/changedFieldsReducer';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const NameAndDescription = Form.create({
  onFieldsChange(props, changedFields) {
    const data = changedFieldsReducer(changedFields);
    props.onChange(data);
  },
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        field: 'name',
        value: props.name,
      }),
      description: Form.createFormField({
        field: 'description',
        value: props.description,
      }),
    };
  },
})((props) => {
  const { getFieldDecorator } = props.form;

  return (
    <Form layout="horizontal">
      <FormItem label="Name">
        {
          getFieldDecorator('name', {
            rules: [{ required: true, message: 'The webhook name is required' }],
          })(<Input />)
        }
      </FormItem>
      <FormItem label="Description">
        {
          getFieldDecorator('description')(<TextArea />)
        }
      </FormItem>
    </Form>
  );
});

NameAndDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
};

export default NameAndDescription;
