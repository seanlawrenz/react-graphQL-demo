export const ticketData = {
  name: 'Ticket blah',
  description: 'This is the description of a ticket',
  payloadUrl: 'https://blah.com/tdwebhooks',
  contentType: 'application/json',
  secret: 'my-secret-code',
  sslVerificationEnabled: false,
  selectAll: false,
  componentEventSelections: [
    {
      id: 9,
      label: 'Ticket',
      eventSelections: [
        {
          id: 1,
          label: 'Created',
          selected: true,
        },
        {
          id: 2,
          label: 'Changed',
          selected: true,
        },
        {
          id: 3,
          label: 'Deleted',
          selected: true,
        },
      ],
    },
  ],
  isActive: true,
};
