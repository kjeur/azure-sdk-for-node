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
 * Input definition for planned failover.
 *
 */
class TestFailoverInput {
  /**
   * Create a TestFailoverInput.
   * @member {object} [properties] Planned failover input properties
   * @member {string} [properties.failoverDirection] Failover direction.
   * @member {string} [properties.networkType] Network type to be used for test
   * failover.
   * @member {string} [properties.networkId] The id of the network to be used
   * for test failover
   * @member {string} [properties.skipTestFailoverCleanup] A value indicating
   * whether the test failover cleanup is to be skipped.
   * @member {object} [properties.providerSpecificDetails] Provider specific
   * settings
   * @member {string} [properties.providerSpecificDetails.instanceType]
   * Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestFailoverInput
   *
   * @returns {object} metadata of TestFailoverInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestFailoverInput',
      type: {
        name: 'Composite',
        className: 'TestFailoverInput',
        modelProperties: {
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'TestFailoverInputProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = TestFailoverInput;
