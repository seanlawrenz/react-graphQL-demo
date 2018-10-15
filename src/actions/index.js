import { APIRequest } from 'constants/api';
import fetch from 'cross-fetch';

export const REQUEST_WEBHOOKS = 'REQUEST_WEBHOOKS';
export const RECEIVED_WEBHOOKS = 'RECIEVED_WEBHOOKS';
export const REQUEST_INDIVIDUAL_WEBHOOK = 'REQUEST_INDIVIDUAL_WEBHOOK';
export const RECEIVED_INDIVIDUAL_WEBHOOK = 'RECEIVED_INDIVIDUAL_WEBHOOK';
export const CREATE_WEBHOOK = 'CREATE_WEBHOOK';
export const EDIT_WEBHOOK = 'EDIT_WEBHOOK';
export const DELETE_WEBHOOK = 'DELETE_WEBHOOK';
export const UPDATE_WEBHOOK_FIELD = 'UPDATE_WEBHOOK_FIELD';
export const ERROR_ON_WEBHOOK = 'ERROR_ON_WEBHOOK';

export const updateWebhookField = field => (
  {
    type: UPDATE_WEBHOOK_FIELD,
    field,
  }
);

const requestWebhooks = () => (
  {
    type: REQUEST_WEBHOOKS,
  }
);

const receivedWebhooks = data => (
  {
    type: RECEIVED_WEBHOOKS,
    webhooks: data,
  }
);

const requestIndividualWebhook = uri => (
  {
    type: REQUEST_INDIVIDUAL_WEBHOOK,
    uri,
  }
);

const receivedIndividualWebhook = data => (
  {
    type: RECEIVED_INDIVIDUAL_WEBHOOK,
    webhook: data,
  }
);

const createWebhook = webhook => (
  {
    type: CREATE_WEBHOOK,
    webhook,
  }
);

const editWebhook = (webhook, uri) => (
  {
    type: EDIT_WEBHOOK,
    webhook,
    uri,
  }
);

const deleteWebhook = (webhook, uri) => (
  {
    type: DELETE_WEBHOOK,
    webhook,
    uri,
  }
);

const errorOnWebhook = data => (
  {
    type: ERROR_ON_WEBHOOK,
    data,
  }
);

export const fetchWebhooks = () => (
  async (dispatch) => {
    dispatch(requestWebhooks());
    const data = await APIRequest(1, 'TDTickets', 1, '');
    dispatch(receivedWebhooks(data));
  }
);

export const fetchIndividualWebhook = uri => (
  async (dispatch) => {
    dispatch(requestIndividualWebhook(uri));
    const data = await APIRequest(1, 'TDTickets', 1, uri);
    dispatch(receivedIndividualWebhook(data));
  }
);

export const createNewWebhook = webhook => (
  async (dispatch) => {
    dispatch(createWebhook(webhook));
    const url = 'api/1/1/TDTickets/1/webhook-config/';
    let data;
    try {
      const body = await JSON.stringify(webhook);
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // eslint-disable-line quote-props
        },
        method: 'POST',
        body,
      });
      data = await response.json();
      if (response.ok && response.status === 200) {
        dispatch(receivedIndividualWebhook(data));
      } else {
        dispatch(errorOnWebhook(data));
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const editExistingWebhook = (webhook, uri) => (
  async (dispatch) => {
    dispatch(editWebhook(webhook, uri));
    const data = await APIRequest(1, 'TDTickets', 1, uri, 'PUT', webhook);
    dispatch(receivedIndividualWebhook(data));
  }
);

export const deleteExistingWebhook = (webhook, uri) => (
  async (dispatch) => {
    dispatch(deleteWebhook(webhook, uri));
    const data = await APIRequest(1, 'TDTickets', 1, uri, 'DELETE', webhook);
    dispatch(receivedWebhooks(data));
  }
);
