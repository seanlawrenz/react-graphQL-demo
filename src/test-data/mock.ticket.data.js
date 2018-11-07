export const ticketData = {
  id: 'V2ViaG9vazp7IklkIjoxfQ==',
  Name: 'Test',
  SslVerificationEnabled: false,
  AllComponentEventsSelected: true,
  Secret: null,
  webhookComponents: {
    edges: [
      {
        id: 'V2ViaG9va0NvbXBvbmVudDp7IklkIjozfQ==',
        Component: {
          Name: 'Ticket',
        },
        webhookComponent: {
          edges: [
            {
              node: {
                EventType: 'Created',
                IsSelected: true,
              },
            },
            {
              node: {
                EventType: 'Updated',
                IsSelected: true,
              },
            },
            {
              node: {
                EventType: 'Deleted',
                IsSelected: true,
              },
            },
          ],
        },
      },
    ],
  },
};
