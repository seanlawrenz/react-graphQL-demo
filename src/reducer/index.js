import { combineReducers } from 'redux';
import {
  REQUEST_WEBHOOKS,
  RECEIVED_WEBHOOKS,
  REQUEST_INDIVIDUAL_WEBHOOK,
  RECEIVED_INDIVIDUAL_WEBHOOK,
  CREATE_WEBHOOK,
  EDIT_WEBHOOK,
  DELETE_WEBHOOK,
  UPDATE_WEBHOOK_FIELD,
} from '../actions';

const getAllWebhooks = (
  state = {
    isFetching: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_WEBHOOKS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVED_WEBHOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.webhooks,
      });
    default:
      return state;
  }
};

const getSelectedWebhook = (
  state = {
    isFetching: false,
    webhook: {},
    showIndividualEventOptions: false,
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_INDIVIDUAL_WEBHOOK:
    case EDIT_WEBHOOK:
    case DELETE_WEBHOOK:
    case CREATE_WEBHOOK:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVED_INDIVIDUAL_WEBHOOK:
      return Object.assign({}, state, {
        isFetching: false,
        webhook: action.webhook,
        updatedWebhookData: action.webhook,
      });
    case UPDATE_WEBHOOK_FIELD: // eslint-disable-line no-case-declarations
      const updatedWebhookData = Object.assign({}, state.webhook, action.field);
      return Object.assign({}, state, { updatedWebhookData, webhook: updatedWebhookData });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getAllWebhooks,
  getSelectedWebhook,
});

export default rootReducer;
