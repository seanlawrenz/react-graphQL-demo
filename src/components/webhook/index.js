import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchIndividualWebhook } from 'actions';
import { Link } from 'react-router-dom';

import { ActiveSkeleton } from 'components/loading-skeletons';
import WebhookDetails from 'components/webhook-details';

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
          <div className="col-md-12">
            <h2>Edit Webhook</h2>
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
