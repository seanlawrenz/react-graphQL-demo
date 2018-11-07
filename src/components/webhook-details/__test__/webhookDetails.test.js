import React from 'react';
import renderer from 'react-test-renderer';
import { ticketData } from 'test-data/mock.ticket.data';
import { WebhookDetails } from '../WebhookDetails';


test('renders correctly', () => {
  const tree = renderer.create(<WebhookDetails webhook={ticketData} onWebhookChange={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('updates the view to show components if select components is selected', () => {
  const ticketWithIndividualEvents = Object.assign({}, ticketData, { AllComponentEventsSelected: false });
  const tree = renderer.create(<WebhookDetails webhook={ticketWithIndividualEvents} onWebhookChange={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
