/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const ServiceClient = msRestAzure.AzureServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a DevTestLabsClient. */
class DevTestLabsClient extends ServiceClient {
  /**
   * Create a DevTestLabsClient.
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   * @param {string} subscriptionId - The subscription ID.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   */
  constructor(credentials, subscriptionId, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.apiVersion = '2016-05-15';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://management.azure.com';
    }
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.labs = new operations.Labs(this);
    this.globalSchedules = new operations.GlobalSchedules(this);
    this.artifactSources = new operations.ArtifactSources(this);
    this.armTemplates = new operations.ArmTemplates(this);
    this.artifacts = new operations.Artifacts(this);
    this.costs = new operations.Costs(this);
    this.customImages = new operations.CustomImages(this);
    this.formulas = new operations.Formulas(this);
    this.galleryImages = new operations.GalleryImages(this);
    this.notificationChannels = new operations.NotificationChannels(this);
    this.policySets = new operations.PolicySets(this);
    this.policies = new operations.Policies(this);
    this.schedules = new operations.Schedules(this);
    this.serviceRunners = new operations.ServiceRunners(this);
    this.users = new operations.Users(this);
    this.disks = new operations.Disks(this);
    this.environments = new operations.Environments(this);
    this.secrets = new operations.Secrets(this);
    this.virtualMachines = new operations.VirtualMachines(this);
    this.virtualMachineSchedules = new operations.VirtualMachineSchedules(this);
    this.virtualNetworks = new operations.VirtualNetworks(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = DevTestLabsClient;