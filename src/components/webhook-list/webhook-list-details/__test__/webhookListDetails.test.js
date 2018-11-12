import React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, wait, render } from 'react-testing-library';
import { Link as MockLink } from 'react-router-dom';
import { build, fake } from 'test-data-bot';
import WebhookListDetails from '../WebhookListDetails';

const webhookBuilder = build('Wehbook').fields({
  id: fake(f => f.lorem.word()),
  Name: fake(f => f.lorem.words()),
  CreatedDate: fake(f => f.date.past()),
  ModifiedDate: fake(f => f.date.recent()),
  CreatedByUserUser: {
    FullName: fake(f => f.name.findName()),
  },
  ModifiedByUserUser: {
    FullName: fake(f => f.name.findName()),
  },
});

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(() => null),
  };
});

afterEach(() => {
  MockLink.mockClear();
});

test('WebhookListDetails', async () => {
  const webhookListDetailsData = webhookBuilder();
  const tbody = document.createElement('tbody');
  const { getByTestId, container } = render(<WebhookListDetails webhookDetails={webhookListDetailsData} />, { container: tbody });
  getByTestId('delete button');
  const results = await axe(container.innerHTML);
  expect(results).toHaveNoViolations();

  fireEvent.click(getByTestId('new webhook'));
  await wait(expect(MockLink).toHaveBeenCalledTimes(1));
});
