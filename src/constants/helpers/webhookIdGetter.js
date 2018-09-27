import split from 'lodash/split';
import last from 'lodash/last';

export const webhookIdGetter = webhook => last(split(webhook._uri, '/'));
