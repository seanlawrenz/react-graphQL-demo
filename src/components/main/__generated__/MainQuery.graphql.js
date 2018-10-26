/**
 * @flow
 * @relayHash e031083cd11bc14118bc29021bfd2015
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type WebhookList_viewer$ref = any;
export type MainQueryVariables = {||};
export type MainQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: WebhookList_viewer$ref
  |}
|};
export type MainQuery = {|
  variables: MainQueryVariables,
  response: MainQueryResponse,
|};
*/

/*
query MainQuery {
  viewer {
    ...WebhookList_viewer
    id
  }
}

fragment WebhookList_viewer on Viewer {
  allWebhookConfigs(first: 25, orderBy: name_ASC) {
    edges {
      node {
        ...WebhookListDetails_webhook
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment WebhookListDetails_webhook on WebhookConfig {
  id
  name
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 25,
        type: 'Int',
      },
      {
        kind: 'Literal',
        name: 'orderBy',
        value: 'name_ASC',
        type: 'WebhookConfigOrderBy',
      },
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    };
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'MainQuery',
    id: null,
    text:
      'query MainQuery {\n  viewer {\n    ...WebhookList_viewer\n    id\n  }\n}\n\nfragment WebhookList_viewer on Viewer {\n  allWebhookConfigs(first: 25, orderBy: name_ASC) {\n    edges {\n      node {\n        ...WebhookListDetails_webhook\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment WebhookListDetails_webhook on WebhookConfig {\n  id\n  name\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'MainQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'viewer',
          storageKey: null,
          args: null,
          concreteType: 'Viewer',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'WebhookList_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'MainQuery',
      argumentDefinitions: [],
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'viewer',
          storageKey: null,
          args: null,
          concreteType: 'Viewer',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'allWebhookConfigs',
              storageKey: 'allWebhookConfigs(first:25,orderBy:"name_ASC")',
              args: v0,
              concreteType: 'WebhookConfigConnection',
              plural: false,
              selections: [
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'edges',
                  storageKey: null,
                  args: null,
                  concreteType: 'WebhookConfigEdge',
                  plural: true,
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'node',
                      storageKey: null,
                      args: null,
                      concreteType: 'WebhookConfig',
                      plural: false,
                      selections: [
                        v1,
                        {
                          kind: 'ScalarField',
                          alias: null,
                          name: 'name',
                          args: null,
                          storageKey: null,
                        },
                        {
                          kind: 'ScalarField',
                          alias: null,
                          name: '__typename',
                          args: null,
                          storageKey: null,
                        },
                      ],
                    },
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'cursor',
                      args: null,
                      storageKey: null,
                    },
                  ],
                },
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'pageInfo',
                  storageKey: null,
                  args: null,
                  concreteType: 'PageInfo',
                  plural: false,
                  selections: [
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'endCursor',
                      args: null,
                      storageKey: null,
                    },
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'hasNextPage',
                      args: null,
                      storageKey: null,
                    },
                  ],
                },
              ],
            },
            {
              kind: 'LinkedHandle',
              alias: null,
              name: 'allWebhookConfigs',
              args: v0,
              handle: 'connection',
              key: 'WebhookList_allWebhookConfigs',
              filters: [],
            },
            v1,
          ],
        },
      ],
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'bfa346d2ceaf01b0d606291a6f462d48';
module.exports = node;
