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
 * List of BackupEngineBase resources
 */
class BackupEngineBaseResourceList extends Array {
  /**
   * Create a BackupEngineBaseResourceList.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BackupEngineBaseResourceList
   *
   * @returns {object} metadata of BackupEngineBaseResourceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupEngineBaseResourceList',
      type: {
        name: 'Composite',
        className: 'BackupEngineBaseResourceList',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BackupEngineBaseResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'BackupEngineBaseResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BackupEngineBaseResourceList;