import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchWebhooks,
  deleteExistingWebhook,
} from 'actions';
import { Link } from 'react-router-dom';

import WebhookList from 'components/webhook-list';

import { webhookIdGetter } from 'constants/helpers/webhookIdGetter';
import { ActiveSkeleton } from '../loading-skeletons';

import './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.deleteWebhook = this.deleteWebhook.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    const { dispatch } = this.props;
    dispatch(fetchWebhooks());
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  deleteWebhook(webhook) {
    const uri = webhookIdGetter(webhook);
    this.props.dispatch(deleteExistingWebhook(webhook, uri));
  }

  render() {
    const { webhooks, isFetching } = this.props;

    return (
      <div className="gutter-bottom">
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/new" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-plus fa-nopad" aria-hidden="true"></span> New
              <span className="sr-only">Create New</span>
            </Link>
          </nav>
          <h1 style={{ margin: '0.5em' }}>Webhooks example</h1>
        </div>
        {
          isFetching && (
            <div>
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
              <ActiveSkeleton paragraph={false} />
            </div>
          )
        }
        {
          !isFetching && !webhooks && (
            <h2>Could not load any webhooks</h2>
          )
        }
        {
          !isFetching && webhooks && (
            <div>
              <WebhookList webhooks={webhooks} deleteWebhook={this.deleteWebhook} />
            </div>
          )
        }
      </div>
    );
  }
}

Main.propTypes = {
  webhooks: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { getAllWebhooks } = state;

  const { isFetching, items: webhooks } = getAllWebhooks || { isFetching: true, items: [] };

  return {
    isFetching,
    webhooks,
  };
};

export default connect(mapStateToProps)(Main);
