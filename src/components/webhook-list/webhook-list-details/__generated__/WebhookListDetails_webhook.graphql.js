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
  +name: string,
  +$refType: WebhookListDetails_webhook$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "WebhookListDetails_webhook",
  "type": "WebhookConfig",
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
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f1e36be0cd743294e00714046b2c17ff';
module.exports = node;
