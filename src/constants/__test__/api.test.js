// import { ticketData } from 'test-data/mock.ticket.data';
// import { listWebhookData } from 'test-data/mock.list.data';
// import { APIRequest } from '../api';

// describe.only('testing api', () => {
//   let data;
//   beforeEach(() => {
//     fetch.resetMocks();
//   });

//   it('calls the api and returns a list of webhooks', async () => {
//     fetch.mockResponseOnce(JSON.stringify(listWebhookData));

//     data = await APIRequest(1, 'TDTickets', 1, '');

//     expect(data).toEqual(listWebhookData);
//   });

//   it('calls the api and returns data for default', async () => {
//     fetch.mockResponseOnce(JSON.stringify(ticketData));

//     data = await APIRequest(1, 'TDTickets', 1, 'default');

//     expect(data).toEqual(ticketData);

//     expect(fetch.mock.calls.length).toEqual(1);
//     expect(fetch.mock.calls[0][0]).toEqual('api/1/1/TDTickets/1/webhook-config/default');
//   });
// });

// This is deprecated
describe('deprecated function', () => {
  it('placeholder', () => {
    expect(true).toBeTruthy();
  });
});
