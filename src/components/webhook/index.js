// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchIndividualWebhook, updateWebhookField, editExistingWebhook } from 'actions';
// import { Link } from 'react-router-dom';

// import { Button } from 'antd';

// import { ActiveSkeleton } from 'components/loading-skeletons';
// import WebhookDetails from 'components/webhook-details';

// import './styles.css';

// class Webhook extends Component {
//   constructor(props) {
//     super(props);

//     this.editWebhook = this.editWebhook.bind(this);
//     this.onWebhookChange = this.onWebhookChange.bind(this);
//   }

//   componentDidMount() {
//     this.mounted = true;
//     const { dispatch } = this.props;
//     const { match: { params: { _uri } } } = this.props;
//     dispatch(fetchIndividualWebhook(_uri));
//   }

//   componentWillUnmount() {
//     this.mounted = false;
//   }

//   editWebhook() {
//     const { dispatch, webhook } = this.props;
//     const { match: { params: { _uri } } } = this.props;
//     dispatch(editExistingWebhook(webhook, _uri));
//   }

//   onWebhookChange(data) { // eslint-disable-line class-methods-use-this
//     const { dispatch } = this.props;
//     dispatch(updateWebhookField(data));
//   }

//   render() {
//     const { webhook, isFetching } = this.props;

//     return (
//       <div className="gutter-bottom">
//         <div className="row">
//           <nav className="buttonCellTop">
//             <Link to="/" className="btn btn-link tdx-react-no-text-decoration">
//               <span className="fa fa-arrow-left fa-nopad" aria-hidden="true"></span> Back
//               <span className="sr-only">Go Back</span>
//             </Link>
//           </nav>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <h2>Edit Webhook</h2>
//             {
//               isFetching && (
//                 <div>
//                   <ActiveSkeleton paragraph={false} />
//                   <ActiveSkeleton />
//                   <ActiveSkeleton />
//                   <ActiveSkeleton />
//                   <ActiveSkeleton paragraph={false} />
//                 </div>
//               )
//             }
//             {
//               !isFetching && webhook.name !== undefined && (
//                 <span>
//                   <WebhookDetails webhook={webhook} onWebhookChange={this.onWebhookChange} />
//                   <Button onClick={this.editWebhook} className="gutter-right" type="primary" icon="save">Save</Button>
//                   <Link to="/"><Button icon="stop">Cancel</Button></Link>
//                 </span>
//               )
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Webhook.propTypes = {
//   webhook: PropTypes.object.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   match: PropTypes.object,
// };

// const mapStateToProps = (state) => {
//   const { getSelectedWebhook } = state;

//   const { isFetching, webhook } = getSelectedWebhook || { isFetching: true, webhook: {} };

//   return {
//     isFetching,
//     webhook,
//   };
// };

// export default connect(mapStateToProps)(Webhook);
