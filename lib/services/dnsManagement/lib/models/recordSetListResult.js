/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The response to a record set List operation.
 */
class RecordSetListResult extends Array {
  /**
   * Create a RecordSetListResult.
   * @member {string} [nextLink] The continuation token for the next page of
   * results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecordSetListResult
   *
   * @returns {object} metadata of RecordSetListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecordSetListResult',
      type: {
        name: 'Composite',
        className: 'RecordSetListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RecordSetElementType',
                  type: {
                    name: 'Composite',
                    className: 'RecordSet'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecordSetListResult;