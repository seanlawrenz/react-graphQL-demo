/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type WebhookListDetails_webhook$ref: FragmentReference;
export type WebhookListDetails_webhook = {|
  +id: string,
  +Name: string,
  +$refType: WebhookListDetails_webhook$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "WebhookListDetails_webhook",
  "type": "Webhook",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "Name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '747f8a0ddd2cf7f741c953ac02609a6d';
module.exports = node;
