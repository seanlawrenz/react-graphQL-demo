import { APIRequest } from 'constants/api';

export const REQUEST_WEBHOOKS = 'REQUEST_WEBHOOKS';
export const RECEIVED_WEBHOOKS = 'RECIEVED_WEBHOOKS';
export const REQUEST_INDIVIDUAL_WEBHOOK = 'REQUEST_INDIVIDUAL_WEBHOOK';
export const RECEIVED_INDIVIDUAL_WEBHOOK = 'RECEIVED_INDIVIDUAL_WEBHOOK';
export const CREATE_WEBHOOK = 'CREATE_WEBHOOK';
export const EDIT_WEBHOOK = 'EDIT_WEBHOOK';
export const DELETE_WEBHOOK = 'DELETE_WEBHOOK';

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
    const data = await APIRequest(1, 'TDTickets', 1, '', 'POST', webhook);
    dispatch(receivedIndividualWebhook(data));
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
