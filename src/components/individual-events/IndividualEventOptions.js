import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { Checkbox } from 'antd';

import './styles.css';

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
        IsSelected: event.target.checked,
      },
    });
  }

  render() {
    const { webhookComponentEvent: { IsSelected, EventType } } = this.state;
    return (
      <Checkbox
        value={IsSelected}
        onChange={this.onChange}
        checked={IsSelected}
      >
        {EventType}
      </Checkbox>
    );
  }
}

IndividualEventOptions.propTypes = {
  webhookComponentEvent: PropTypes.object.isRequired,
};

export default createFragmentContainer(IndividualEventOptions, {
  webhookComponentEvent: graphql`
    fragment IndividualEventOptions_webhookComponentEvent on WebhookComponentEvent {
      IsSelected
      EventType
    }
  `,
});
