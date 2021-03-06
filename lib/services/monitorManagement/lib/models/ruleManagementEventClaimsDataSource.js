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
 * The claims for a rule management event data source.
 *
 */
class RuleManagementEventClaimsDataSource {
  /**
   * Create a RuleManagementEventClaimsDataSource.
   * @member {string} [emailAddress] the email address.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RuleManagementEventClaimsDataSource
   *
   * @returns {object} metadata of RuleManagementEventClaimsDataSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RuleManagementEventClaimsDataSource',
      type: {
        name: 'Composite',
        className: 'RuleManagementEventClaimsDataSource',
        modelProperties: {
          emailAddress: {
            required: false,
            serializedName: 'emailAddress',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RuleManagementEventClaimsDataSource;
