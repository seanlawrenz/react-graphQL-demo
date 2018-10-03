import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchIndividualWebhook, updateWebhookField, createNewWebhook } from 'actions';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import { ActiveSkeleton } from 'components/loading-skeletons';

import WebhookDetails from 'components/webhook-details';

class NewWebhook extends Component {
  constructor(props) {
    super(props);
    this.createWebhook = this.createWebhook.bind(this);
    this.onWebhookChange = this.onWebhookChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIndividualWebhook('default'));
  }

  createWebhook() {
    const { dispatch, webhook } = this.props;
    dispatch(createNewWebhook(webhook));
  }

  onWebhookChange(data) { // eslint-disable-line class-methods-use-this
    const { dispatch } = this.props;
    dispatch(updateWebhookField(data));
  }

  render() {
    const { webhook, isFetching } = this.props;

    return (
      <div>
        <div className="row">
          <nav className="buttonCellTop">
            <Link to="/" className="btn btn-link tdx-react-no-text-decoration">
              <span className="fa fa-arrow-left fa-nopad" aria-hidden="true"></span> Back
              <span className="sr-only">Go Back</span>
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>New Webhook</h2>
            <p>We will send a POST request to the URL below with details of any subscribed events. You can also specify which data format you’d like to receive (JSON, x-www-form-urlencoded, etc). <a href="https://solutions.teamdynamix.com/TDClient/KB/ArticleDet?ID=49694" rel="noopener noreferrer" target="_blank">More information can be found in our developer documentation.</a></p>
            {
              isFetching && (
                <div>
                  <ActiveSkeleton paragraph={false} />
                  <ActiveSkeleton />
                  <ActiveSkeleton />
                  <ActiveSkeleton />
                  <ActiveSkeleton paragraph={false} />
                </div>
              )
            }
            {
              !isFetching && webhook.contentType !== undefined && (
                <span>
                  <WebhookDetails webhook={webhook} onWebhookChange={this.onWebhookChange} />
                  <Button onClick={this.createWebhook} className="gutter-right" type="primary" icon="save">Save</Button>
                  <Link to="/"><Button icon="stop">Cancel</Button></Link>
                </span>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

NewWebhook.propTypes = {
  webhook: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { getSelectedWebhook } = state;

  const { isFetching, webhook } = getSelectedWebhook || { isFetching: true, webhook: {} };

  return {
    isFetching,
    webhook,
  };
};

export default connect(mapStateToProps)(NewWebhook);
