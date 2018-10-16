/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type WebhookListDetails_webhook$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type WebhookList_viewer$ref: FragmentReference;
export type WebhookList_viewer = {|
  +allWebhookConfigs: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: WebhookListDetails_webhook$ref
      |}
    |}>
  |},
  +$refType: WebhookList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "WebhookList_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "allWebhookConfigs"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allWebhookConfigs",
      "name": "__WebhookList_allWebhookConfigs_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "WebhookConfigConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "WebhookConfigEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "WebhookConfig",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "WebhookListDetails_webhook",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4dcbfbfa49a719b9cecff62f46711829';
module.exports = node;
