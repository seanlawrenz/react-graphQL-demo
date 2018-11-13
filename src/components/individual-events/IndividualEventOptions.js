import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Checkbox } from 'antd';

import './styles.css';

export const IndividualEventOptionsFragment = gql`
  fragment IndividualEventOptions_webhookComponentEvent on webhookComponentEvent {
    isSelected
    eventType
  }
`;

class IndividualEventOptions extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    const { webhookComponentEvent } = this.props;
    this.state = {
      webhookComponentEvent,
    };
  }

  onChange(event) {
    this.setState({
      ...this.state, // eslint-disable-line
      webhookComponentEvent: {
        ...this.state.webhookComponentEvent, // eslint-disable-line
        isSelected: event.target.checked,
      },
    });
  }

  render() {
    const {
      webhookComponentEvent: { isSelected, eventType },
    } = this.state;
    return (
      <Checkbox value={isSelected} onChange={this.onChange} checked={isSelected}>
        {eventType}
      </Checkbox>
    );
  }
}

IndividualEventOptions.propTypes = {
  webhookComponentEvent: PropTypes.object.isRequired,
};

export default IndividualEventOptions;
