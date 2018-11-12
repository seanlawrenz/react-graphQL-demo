import React from 'react';
import PropTypes from 'prop-types';

import { changedFieldsReducer } from 'constants/helpers/changedFieldsReducer';
import { Form, Radio } from 'antd';
import { radioStyle } from 'theme/variables';

import './styles.css';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const WebHookEvents = Form.create({
  onFieldsChange(props, changedFields) {
    const data = changedFieldsReducer(changedFields);
    props.onChange(data);
  },
  mapPropsToFields(props) {
    return {
      allComponentEventsSelected: Form.createFormField({
        field: 'allComponentEventsSelected',
        value: props.allComponentEventsSelected,
      }),
    };
  },
})(props => {
  const { getFieldDecorator } = props.form;

  return (
    <Form layout="horizontal">
      <FormItem label="Events">
        {getFieldDecorator('allComponentEventsSelected')(
          // eslint-disable-line function-paren-newline
          <RadioGroup>
            <Radio style={radioStyle} value={true}>
              Send me everything
            </Radio>
            <Radio style={radioStyle} value={false}>
              Let me select individual events
            </Radio>
          </RadioGroup>,
        ) // eslint-disable-line function-paren-newline
        }
      </FormItem>
    </Form>
  );
});

WebHookEvents.propTypes = {
  allComponentEventsSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WebHookEvents;
