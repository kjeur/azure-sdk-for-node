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

const models = require('./index');

/**
 * The Azure Resource Manager resource.
 *
 * @extends models['BaseResource']
 */
class Resource extends models['BaseResource'] {
  /**
   * Create a Resource.
   * @member {string} [id] The id of the resource.
   * @member {string} [name] The name of the resource.
   * @member {string} [type] The type of the resource
   * @member {string} [location] The geographic location of the resource. This
   * must be one of the supported and registered Azure Geo Regions (for
   * example, West US, East US, Southeast Asia, and so forth).
   * @member {object} [tags] Tags to help categorize the resource in the Azure
   * portal.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Resource
   *
   * @returns {object} metadata of Resource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Resource',
      type: {
        name: 'Composite',
        className: 'Resource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Resource;