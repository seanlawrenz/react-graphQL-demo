import { ticketData } from 'test-data/mock.ticket.data';
import { APIRequest } from '../api';

describe('testing api', () => {
  // beforeEach(() => {
  //   fetch.resetMocks();
  // });

  it('calls the api and returns data for default', () => {
    fetch.mockResponseOnce(JSON.stringify(ticketData));

    APIRequest(1, 'TDTickets', 1, 'default').then((response) => {
      expect(response).toEqual(ticketData);
    });

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('api/1/1/TDTickets/1/webhook-config/default');
  });

  it('calls console error on a failed fetch response', () => {
    const spy = spyOn(console, 'error'); // eslint-disable-line no-undef
    fetch.mockReject(new Error('I do not want to work'));

    APIRequest(1, 'TDTickets', 1, 'default').then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
