import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchIndividualWebhook } from 'actions';
import { Link } from 'react-router-dom';

import { ActiveSkeleton } from '../loading-skeletons';

import WebhookDetails from './webhook-details';

import './styles.css';

class Webhook extends Component {
  constructor(props) {
    super(props);

    this.editWebhook = this.editWebhook.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    const { dispatch } = this.props;
    const { match: { params: { _uri } } } = this.props;
    dispatch(fetchIndividualWebhook(_uri));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  editWebhook() {
    // Placeholder for future work
    console.log(this.props);
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
          <div className="col-md-12 gutter-top">
            <h2>Edit Webhook</h2>
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
              !isFetching && webhook.name !== undefined && (
                <WebhookDetails webhook={webhook} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

Webhook.propTypes = {
  webhook: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { getSelectedWebhook } = state;

  const { isFetching, item: webhook } = getSelectedWebhook || { isFetching: true, item: {} };

  return {
    isFetching,
    webhook,
  };
};

export default connect(mapStateToProps)(Webhook);
