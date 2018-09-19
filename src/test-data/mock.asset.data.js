export const assetData = {
  name: 'Asset blah',
  payloadUrl: 'https://blah.com/tdwebhooks',
  description: 'This is a description of an asset',
  contentType: 'application/json',
  secret: 'my-secret-code',
  sslVerificationEnabled: false,
  selectAll: false,
  componentEventSelections: [{
    id: 27,
    label: 'Asset',
    eventSelections: [{
      id: 1,
      label: 'Created',
      selected: false,
    },
    {
      id: 2,
      label: 'Changed',
      selected: true,
    },
    {
      id: 3,
      label: 'Deleted',
      selected: false,
    }],
  }, {
    id: 63,
    label: 'Configuration Item',
    eventSelections: [{
      id: 1,
      label: 'Created',
      selected: false,
    }, {
      id: 2,
      label: 'Changed',
      selected: true,
    }, {
      id: 4,
      label: 'Deleted',
      selected: false,
    }],
  }],
};
