import React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, wait, render } from 'react-testing-library';
import { Link as MockLink } from 'react-router-dom';
import { build, fake } from 'test-data-bot';
import WebhookListDetails from '..';

const webhookBuilder = build('Wehbook').fields({
  id: fake(f => f.lorem.word()),
  name: fake(f => f.lorem.words()),
  createdDate: fake(f => f.date.past()),
  modifiedDate: fake(f => f.date.recent()),
  createdByUser: {
    fullName: fake(f => f.name.findName()),
  },
  modifiedByUser: {
    fullName: fake(f => f.name.findName()),
  },
});

jest.mock('react-router-dom', () => ({
  Link: jest.fn(() => null),
}));

afterEach(() => {
  MockLink.mockClear();
});

test('WebhookListDetails', async () => {
  const webhookListDetailsData = webhookBuilder();
  const tbody = document.createElement('tbody');
  const { getByTestId, container } = render(
    // Addding <tr> here to suppress warnings
    <tr>
      <WebhookListDetails webhookDetails={webhookListDetailsData} />
    </tr>,
    { container: tbody },
  );
  getByTestId('delete button');
  const results = await axe(container.innerHTML);
  expect(results).toHaveNoViolations();

  fireEvent.click(getByTestId('new webhook'));
  await wait(expect(MockLink).toHaveBeenCalledTimes(1));
});
