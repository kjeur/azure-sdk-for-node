/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Azure resource
 *
 * @member {string} [id] Specifies the resource ID.
 * @member {string} [name] Specifies the name of the resource.
 * @member {string} location Specifies the location of the resource.
 * @member {string} [type] Specifies the type of the resource.
 * @member {object} [tags] Contains resource tags defined as key/value pairs.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  location: string;
  readonly type?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ErrorDetail class.
 * @constructor
 * Error detail information.
 *
 * @member {string} code Error code.
 * @member {string} message Error message.
 */
export interface ErrorDetail {
  code: string;
  message: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error response information.
 *
 * @member {string} code Error code.
 * @member {string} message Error message.
 * @member {array} [details] An array of error detail objects.
 */
export interface ErrorResponse {
  code: string;
  message: string;
  details?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the ErrorResponseWrapper class.
 * @constructor
 * Wrapper for error response to follow ARM guidelines.
 *
 * @member {object} [error] The error response.
 * @member {string} [error.code] Error code.
 * @member {string} [error.message] Error message.
 * @member {array} [error.details] An array of error detail objects.
 */
export interface ErrorResponseWrapper {
  error?: ErrorResponse;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountProperties class.
 * @constructor
 * Properties of Storage Account.
 *
 * @member {string} [resourceId] ARM resource ID of the Azure Storage Account
 * to store CLI specific files. If not provided one will be created. This
 * cannot be changed once the cluster is created.
 */
export interface StorageAccountProperties {
  resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerRegistryProperties class.
 * @constructor
 * Properties of Azure Container Registry.
 *
 * @member {string} [resourceId] ARM resource ID of the Azure Container
 * Registry used to store Docker images for web services in the cluster. If not
 * provided one will be created. This cannot be changed once the cluster is
 * created.
 */
export interface ContainerRegistryProperties {
  resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the ServicePrincipalProperties class.
 * @constructor
 * The Azure service principal used by Kubernetes for configuring load
 * balancers
 *
 * @member {string} clientId The service principal client ID
 * @member {string} secret The service principal secret. This is not returned
 * in response of GET/PUT on the resource. To see this please call listKeys.
 */
export interface ServicePrincipalProperties {
  clientId: string;
  secret: string;
}

/**
 * @class
 * Initializes a new instance of the KubernetesClusterProperties class.
 * @constructor
 * Kubernetes cluster specific properties
 *
 * @member {object} servicePrincipal The Azure Service Principal used by
 * Kubernetes
 * @member {string} [servicePrincipal.clientId] The service principal client ID
 * @member {string} [servicePrincipal.secret] The service principal secret.
 * This is not returned in response of GET/PUT on the resource. To see this
 * please call listKeys.
 */
export interface KubernetesClusterProperties {
  servicePrincipal: ServicePrincipalProperties;
}

/**
 * @class
 * Initializes a new instance of the SystemService class.
 * @constructor
 * Information about a system service deployed in the cluster
 *
 * @member {string} systemServiceType The system service type. Possible values
 * include: 'None', 'ScoringFrontEnd', 'BatchFrontEnd'
 * @member {string} [publicIpAddress] The public IP address of the system
 * service
 * @member {string} [version] The state of the system service
 */
export interface SystemService {
  systemServiceType: string;
  readonly publicIpAddress?: string;
  readonly version?: string;
}

/**
 * @class
 * Initializes a new instance of the AcsClusterProperties class.
 * @constructor
 * Information about the container service backing the cluster
 *
 * @member {string} [clusterFqdn] The FQDN of the cluster.
 * @member {string} orchestratorType Type of orchestrator. It cannot be changed
 * once the cluster is created. Possible values include: 'Kubernetes', 'None'
 * @member {object} orchestratorProperties Orchestrator specific properties
 * @member {object} [orchestratorProperties.servicePrincipal] The Azure Service
 * Principal used by Kubernetes
 * @member {string} [orchestratorProperties.servicePrincipal.clientId] The
 * service principal client ID
 * @member {string} [orchestratorProperties.servicePrincipal.secret] The
 * service principal secret. This is not returned in response of GET/PUT on the
 * resource. To see this please call listKeys.
 * @member {array} [systemServices] The system services deployed to the cluster
 * @member {number} [masterCount] The number of master nodes in the container
 * service. Default value: 1 .
 * @member {number} [agentCount] The number of agent nodes in the Container
 * Service. This can be changed to scale the cluster. Default value: 2 .
 * @member {string} [agentVmSize] The Azure VM size of the agent VM nodes. This
 * cannot be changed once the cluster is created. This list is non exhaustive;
 * refer to
 * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for
 * the possible VM sizes. Possible values include: 'Standard_A0',
 * 'Standard_A1', 'Standard_A2', 'Standard_A3', 'Standard_A4', 'Standard_A5',
 * 'Standard_A6', 'Standard_A7', 'Standard_A8', 'Standard_A9', 'Standard_A10',
 * 'Standard_A11', 'Standard_D1', 'Standard_D2', 'Standard_D3', 'Standard_D4',
 * 'Standard_D11', 'Standard_D12', 'Standard_D13', 'Standard_D14',
 * 'Standard_D1_v2', 'Standard_D2_v2', 'Standard_D3_v2', 'Standard_D4_v2',
 * 'Standard_D5_v2', 'Standard_D11_v2', 'Standard_D12_v2', 'Standard_D13_v2',
 * 'Standard_D14_v2', 'Standard_G1', 'Standard_G2', 'Standard_G3',
 * 'Standard_G4', 'Standard_G5', 'Standard_DS1', 'Standard_DS2',
 * 'Standard_DS3', 'Standard_DS4', 'Standard_DS11', 'Standard_DS12',
 * 'Standard_DS13', 'Standard_DS14', 'Standard_GS1', 'Standard_GS2',
 * 'Standard_GS3', 'Standard_GS4', 'Standard_GS5'. Default value:
 * 'Standard_D3_v2' .
 */
export interface AcsClusterProperties {
  readonly clusterFqdn?: string;
  orchestratorType: string;
  orchestratorProperties: KubernetesClusterProperties;
  systemServices?: SystemService[];
  masterCount?: number;
  agentCount?: number;
  agentVmSize?: string;
}

/**
 * @class
 * Initializes a new instance of the AppInsightsProperties class.
 * @constructor
 * Properties of App Insights.
 *
 * @member {string} [resourceId] ARM resource ID of the App Insights.
 */
export interface AppInsightsProperties {
  resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the SslConfiguration class.
 * @constructor
 * SSL configuration. If configured data-plane calls to user services will be
 * exposed over SSL only.
 *
 * @member {string} [status] SSL status. Allowed values are Enabled and
 * Disabled. Possible values include: 'Enabled', 'Disabled'. Default value:
 * 'Enabled' .
 * @member {string} [cert] The SSL cert data in PEM format encoded as base64
 * string
 * @member {string} [key] The SSL key data in PEM format encoded as base64
 * string. This is not returned in response of GET/PUT on the resource. To see
 * this please call listKeys API.
 * @member {string} [cname] The CName of the certificate.
 */
export interface SslConfiguration {
  status?: string;
  cert?: string;
  key?: string;
  cname?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceAuthConfiguration class.
 * @constructor
 * Global service auth configuration properties. These are the data-plane
 * authorization keys and are used if a service doesn't define it's own.
 *
 * @member {string} primaryAuthKeyHash The primary auth key hash. This is not
 * returned in response of GET/PUT on the resource.. To see this please call
 * listKeys API.
 * @member {string} secondaryAuthKeyHash The secondary auth key hash. This is
 * not returned in response of GET/PUT on the resource.. To see this please
 * call listKeys API.
 */
export interface ServiceAuthConfiguration {
  primaryAuthKeyHash: string;
  secondaryAuthKeyHash: string;
}

/**
 * @class
 * Initializes a new instance of the AutoScaleConfiguration class.
 * @constructor
 * AutoScale configuration properties.
 *
 * @member {string} [status] If auto-scale is enabled for all services. Each
 * service can turn it off individually. Possible values include: 'Enabled',
 * 'Disabled'. Default value: 'Disabled' .
 * @member {number} [minReplicas] The minimum number of replicas for each
 * service. Default value: 1 .
 * @member {number} [maxReplicas] The maximum number of replicas for each
 * service. Default value: 100 .
 * @member {number} [targetUtilization] The target utilization.
 * @member {number} [refreshPeriodInSeconds] Refresh period in seconds.
 */
export interface AutoScaleConfiguration {
  status?: string;
  minReplicas?: number;
  maxReplicas?: number;
  targetUtilization?: number;
  refreshPeriodInSeconds?: number;
}

/**
 * @class
 * Initializes a new instance of the GlobalServiceConfiguration class.
 * @constructor
 * Global configuration for services in the cluster.
 *
 * @member {object} [additionalProperties] Unmatched properties from the
 * message are deserialized this collection
 * @member {string} [etag] The configuartion ETag for updates.
 * @member {object} [ssl] The SSL configuration properties
 * @member {string} [ssl.status] SSL status. Allowed values are Enabled and
 * Disabled. Possible values include: 'Enabled', 'Disabled'
 * @member {string} [ssl.cert] The SSL cert data in PEM format encoded as
 * base64 string
 * @member {string} [ssl.key] The SSL key data in PEM format encoded as base64
 * string. This is not returned in response of GET/PUT on the resource. To see
 * this please call listKeys API.
 * @member {string} [ssl.cname] The CName of the certificate.
 * @member {object} [serviceAuth] Optional global authorization keys for all
 * user services deployed in cluster. These are used if the service does not
 * have auth keys.
 * @member {string} [serviceAuth.primaryAuthKeyHash] The primary auth key hash.
 * This is not returned in response of GET/PUT on the resource.. To see this
 * please call listKeys API.
 * @member {string} [serviceAuth.secondaryAuthKeyHash] The secondary auth key
 * hash. This is not returned in response of GET/PUT on the resource.. To see
 * this please call listKeys API.
 * @member {object} [autoScale] The auto-scale configuration
 * @member {string} [autoScale.status] If auto-scale is enabled for all
 * services. Each service can turn it off individually. Possible values
 * include: 'Enabled', 'Disabled'
 * @member {number} [autoScale.minReplicas] The minimum number of replicas for
 * each service.
 * @member {number} [autoScale.maxReplicas] The maximum number of replicas for
 * each service.
 * @member {number} [autoScale.targetUtilization] The target utilization.
 * @member {number} [autoScale.refreshPeriodInSeconds] Refresh period in
 * seconds.
 */
export interface GlobalServiceConfiguration {
  additionalProperties?: { [propertyName: string]: any };
  etag?: string;
  ssl?: SslConfiguration;
  serviceAuth?: ServiceAuthConfiguration;
  autoScale?: AutoScaleConfiguration;
}

/**
 * @class
 * Initializes a new instance of the OperationalizationCluster class.
 * @constructor
 * Instance of an Azure ML Operationalization Cluster resource.
 *
 * @member {string} [description] The description of the cluster.
 * @member {date} [createdOn] The date and time when the cluster was created.
 * @member {date} [modifiedOn] The date and time when the cluster was last
 * modified.
 * @member {string} [provisioningState] The provision state of the cluster.
 * Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
 * Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting',
 * 'Succeeded', 'Failed', 'Canceled'
 * @member {array} [provisioningErrors] List of provisioning errors reported by
 * the resource provider.
 * @member {string} clusterType The cluster type. Possible values include:
 * 'ACS', 'Local'
 * @member {object} [storageAccount] Storage Account properties.
 * @member {string} [storageAccount.resourceId] ARM resource ID of the Azure
 * Storage Account to store CLI specific files. If not provided one will be
 * created. This cannot be changed once the cluster is created.
 * @member {object} [containerRegistry] Container Registry properties.
 * @member {string} [containerRegistry.resourceId] ARM resource ID of the Azure
 * Container Registry used to store Docker images for web services in the
 * cluster. If not provided one will be created. This cannot be changed once
 * the cluster is created.
 * @member {object} [containerService] Parameters for the Azure Container
 * Service cluster.
 * @member {string} [containerService.clusterFqdn] The FQDN of the cluster.
 * @member {string} [containerService.orchestratorType] Type of orchestrator.
 * It cannot be changed once the cluster is created. Possible values include:
 * 'Kubernetes', 'None'
 * @member {object} [containerService.orchestratorProperties] Orchestrator
 * specific properties
 * @member {object} [containerService.orchestratorProperties.servicePrincipal]
 * The Azure Service Principal used by Kubernetes
 * @member {string}
 * [containerService.orchestratorProperties.servicePrincipal.clientId] The
 * service principal client ID
 * @member {string}
 * [containerService.orchestratorProperties.servicePrincipal.secret] The
 * service principal secret. This is not returned in response of GET/PUT on the
 * resource. To see this please call listKeys.
 * @member {array} [containerService.systemServices] The system services
 * deployed to the cluster
 * @member {number} [containerService.masterCount] The number of master nodes
 * in the container service.
 * @member {number} [containerService.agentCount] The number of agent nodes in
 * the Container Service. This can be changed to scale the cluster.
 * @member {string} [containerService.agentVmSize] The Azure VM size of the
 * agent VM nodes. This cannot be changed once the cluster is created. This
 * list is non exhaustive; refer to
 * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for
 * the possible VM sizes. Possible values include: 'Standard_A0',
 * 'Standard_A1', 'Standard_A2', 'Standard_A3', 'Standard_A4', 'Standard_A5',
 * 'Standard_A6', 'Standard_A7', 'Standard_A8', 'Standard_A9', 'Standard_A10',
 * 'Standard_A11', 'Standard_D1', 'Standard_D2', 'Standard_D3', 'Standard_D4',
 * 'Standard_D11', 'Standard_D12', 'Standard_D13', 'Standard_D14',
 * 'Standard_D1_v2', 'Standard_D2_v2', 'Standard_D3_v2', 'Standard_D4_v2',
 * 'Standard_D5_v2', 'Standard_D11_v2', 'Standard_D12_v2', 'Standard_D13_v2',
 * 'Standard_D14_v2', 'Standard_G1', 'Standard_G2', 'Standard_G3',
 * 'Standard_G4', 'Standard_G5', 'Standard_DS1', 'Standard_DS2',
 * 'Standard_DS3', 'Standard_DS4', 'Standard_DS11', 'Standard_DS12',
 * 'Standard_DS13', 'Standard_DS14', 'Standard_GS1', 'Standard_GS2',
 * 'Standard_GS3', 'Standard_GS4', 'Standard_GS5'
 * @member {object} [appInsights] AppInsights configuration.
 * @member {string} [appInsights.resourceId] ARM resource ID of the App
 * Insights.
 * @member {object} [globalServiceConfiguration] Contains global configuration
 * for the web services in the cluster.
 * @member {object} [globalServiceConfiguration.additionalProperties] Unmatched
 * properties from the message are deserialized this collection
 * @member {string} [globalServiceConfiguration.etag] The configuartion ETag
 * for updates.
 * @member {object} [globalServiceConfiguration.ssl] The SSL configuration
 * properties
 * @member {string} [globalServiceConfiguration.ssl.status] SSL status. Allowed
 * values are Enabled and Disabled. Possible values include: 'Enabled',
 * 'Disabled'
 * @member {string} [globalServiceConfiguration.ssl.cert] The SSL cert data in
 * PEM format encoded as base64 string
 * @member {string} [globalServiceConfiguration.ssl.key] The SSL key data in
 * PEM format encoded as base64 string. This is not returned in response of
 * GET/PUT on the resource. To see this please call listKeys API.
 * @member {string} [globalServiceConfiguration.ssl.cname] The CName of the
 * certificate.
 * @member {object} [globalServiceConfiguration.serviceAuth] Optional global
 * authorization keys for all user services deployed in cluster. These are used
 * if the service does not have auth keys.
 * @member {string} [globalServiceConfiguration.serviceAuth.primaryAuthKeyHash]
 * The primary auth key hash. This is not returned in response of GET/PUT on
 * the resource.. To see this please call listKeys API.
 * @member {string}
 * [globalServiceConfiguration.serviceAuth.secondaryAuthKeyHash] The secondary
 * auth key hash. This is not returned in response of GET/PUT on the resource..
 * To see this please call listKeys API.
 * @member {object} [globalServiceConfiguration.autoScale] The auto-scale
 * configuration
 * @member {string} [globalServiceConfiguration.autoScale.status] If auto-scale
 * is enabled for all services. Each service can turn it off individually.
 * Possible values include: 'Enabled', 'Disabled'
 * @member {number} [globalServiceConfiguration.autoScale.minReplicas] The
 * minimum number of replicas for each service.
 * @member {number} [globalServiceConfiguration.autoScale.maxReplicas] The
 * maximum number of replicas for each service.
 * @member {number} [globalServiceConfiguration.autoScale.targetUtilization]
 * The target utilization.
 * @member {number}
 * [globalServiceConfiguration.autoScale.refreshPeriodInSeconds] Refresh period
 * in seconds.
 */
export interface OperationalizationCluster extends Resource {
  description?: string;
  readonly createdOn?: Date;
  readonly modifiedOn?: Date;
  readonly provisioningState?: string;
  readonly provisioningErrors?: ErrorResponseWrapper[];
  clusterType: string;
  storageAccount?: StorageAccountProperties;
  containerRegistry?: ContainerRegistryProperties;
  containerService?: AcsClusterProperties;
  appInsights?: AppInsightsProperties;
  globalServiceConfiguration?: GlobalServiceConfiguration;
}

/**
 * @class
 * Initializes a new instance of the OperationalizationClusterUpdateParameters class.
 * @constructor
 * Parameters for PATCH operation on an operationalization cluster
 *
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater in length than 128 characters
 * and a value no greater in length than 256 characters.
 */
export interface OperationalizationClusterUpdateParameters {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the StorageAccountCredentials class.
 * @constructor
 * Access information for the storage account.
 *
 * @member {string} [resourceId] The ARM resource ID of the storage account.
 * @member {string} [primaryKey] The primary key of the storage account.
 * @member {string} [secondaryKey] The secondary key of the storage account.
 */
export interface StorageAccountCredentials {
  readonly resourceId?: string;
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerRegistryCredentials class.
 * @constructor
 * Information about the Azure Container Registry which contains the images
 * deployed to the cluster.
 *
 * @member {string} [loginServer] The ACR login server name. User name is the
 * first part of the FQDN.
 * @member {string} [password] The ACR primary password.
 * @member {string} [password2] The ACR secondary password.
 * @member {string} [username] The ACR login username.
 */
export interface ContainerRegistryCredentials {
  readonly loginServer?: string;
  readonly password?: string;
  readonly password2?: string;
  readonly username?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceCredentials class.
 * @constructor
 * Information about the Azure Container Registry which contains the images
 * deployed to the cluster.
 *
 * @member {string} [acsKubeConfig] The ACS kube config file.
 * @member {object} [servicePrincipalConfiguration] Service principal
 * configuration used by Kubernetes.
 * @member {string} [servicePrincipalConfiguration.clientId] The service
 * principal client ID
 * @member {string} [servicePrincipalConfiguration.secret] The service
 * principal secret. This is not returned in response of GET/PUT on the
 * resource. To see this please call listKeys.
 * @member {string} [imagePullSecretName] The ACR image pull secret name which
 * was created in Kubernetes.
 */
export interface ContainerServiceCredentials {
  readonly acsKubeConfig?: string;
  readonly servicePrincipalConfiguration?: ServicePrincipalProperties;
  readonly imagePullSecretName?: string;
}

/**
 * @class
 * Initializes a new instance of the AppInsightsCredentials class.
 * @constructor
 * AppInsights credentials.
 *
 * @member {string} [appId] The AppInsights application ID.
 * @member {string} [instrumentationKey] The AppInsights instrumentation key.
 * This is not returned in response of GET/PUT on the resource. To see this
 * please call listKeys API.
 */
export interface AppInsightsCredentials {
  appId?: string;
  instrumentationKey?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationalizationClusterCredentials class.
 * @constructor
 * Credentials to resources in the cluster.
 *
 * @member {object} [storageAccount] Credentials for the Storage Account.
 * @member {string} [storageAccount.resourceId] The ARM resource ID of the
 * storage account.
 * @member {string} [storageAccount.primaryKey] The primary key of the storage
 * account.
 * @member {string} [storageAccount.secondaryKey] The secondary key of the
 * storage account.
 * @member {object} [containerRegistry] Credentials for Azure Container
 * Registry.
 * @member {string} [containerRegistry.loginServer] The ACR login server name.
 * User name is the first part of the FQDN.
 * @member {string} [containerRegistry.password] The ACR primary password.
 * @member {string} [containerRegistry.password2] The ACR secondary password.
 * @member {string} [containerRegistry.username] The ACR login username.
 * @member {object} [containerService] Credentials for Azure Container Service.
 * @member {string} [containerService.acsKubeConfig] The ACS kube config file.
 * @member {object} [containerService.servicePrincipalConfiguration] Service
 * principal configuration used by Kubernetes.
 * @member {string} [containerService.servicePrincipalConfiguration.clientId]
 * The service principal client ID
 * @member {string} [containerService.servicePrincipalConfiguration.secret] The
 * service principal secret. This is not returned in response of GET/PUT on the
 * resource. To see this please call listKeys.
 * @member {string} [containerService.imagePullSecretName] The ACR image pull
 * secret name which was created in Kubernetes.
 * @member {object} [appInsights] Credentials for Azure AppInsights.
 * @member {string} [appInsights.appId] The AppInsights application ID.
 * @member {string} [appInsights.instrumentationKey] The AppInsights
 * instrumentation key. This is not returned in response of GET/PUT on the
 * resource. To see this please call listKeys API.
 * @member {object} [serviceAuthConfiguration] Global authorization keys for
 * all user services deployed in cluster. These are used if the service does
 * not have auth keys.
 * @member {string} [serviceAuthConfiguration.primaryAuthKeyHash] The primary
 * auth key hash. This is not returned in response of GET/PUT on the resource..
 * To see this please call listKeys API.
 * @member {string} [serviceAuthConfiguration.secondaryAuthKeyHash] The
 * secondary auth key hash. This is not returned in response of GET/PUT on the
 * resource.. To see this please call listKeys API.
 * @member {object} [sslConfiguration] The SSL configuration for the services.
 * @member {string} [sslConfiguration.status] SSL status. Allowed values are
 * Enabled and Disabled. Possible values include: 'Enabled', 'Disabled'
 * @member {string} [sslConfiguration.cert] The SSL cert data in PEM format
 * encoded as base64 string
 * @member {string} [sslConfiguration.key] The SSL key data in PEM format
 * encoded as base64 string. This is not returned in response of GET/PUT on the
 * resource. To see this please call listKeys API.
 * @member {string} [sslConfiguration.cname] The CName of the certificate.
 */
export interface OperationalizationClusterCredentials {
  storageAccount?: StorageAccountCredentials;
  containerRegistry?: ContainerRegistryCredentials;
  containerService?: ContainerServiceCredentials;
  appInsights?: AppInsightsCredentials;
  serviceAuthConfiguration?: ServiceAuthConfiguration;
  sslConfiguration?: SslConfiguration;
}

/**
 * @class
 * Initializes a new instance of the CheckSystemServicesUpdatesAvailableResponse class.
 * @constructor
 * Information about updates available for system services in a cluster.
 *
 * @member {string} [updatesAvailable] Yes if updates are available for the
 * system services, No if not. Possible values include: 'Yes', 'No'
 */
export interface CheckSystemServicesUpdatesAvailableResponse {
  readonly updatesAvailable?: string;
}

/**
 * @class
 * Initializes a new instance of the UpdateSystemServicesResponse class.
 * @constructor
 * Response of the update system services API
 *
 * @member {string} [updateStatus] Update status. Possible values include:
 * 'Unknown', 'Updating', 'Creating', 'Deleting', 'Succeeded', 'Failed',
 * 'Canceled'
 * @member {date} [updateStartedOn] The date and time when the last system
 * services update was started.
 * @member {date} [updateCompletedOn] The date and time when the last system
 * services update completed.
 */
export interface UpdateSystemServicesResponse {
  readonly updateStatus?: string;
  readonly updateStartedOn?: Date;
  readonly updateCompletedOn?: Date;
}

/**
 * @class
 * Initializes a new instance of the ResourceOperationDisplay class.
 * @constructor
 * Display of the operation.
 *
 * @member {string} [provider] The resource provider name.
 * @member {string} [resource] The resource name.
 * @member {string} [operation] The operation.
 * @member {string} [description] The description of the operation.
 */
export interface ResourceOperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceOperation class.
 * @constructor
 * Resource operation.
 *
 * @member {string} [name] Name of this operation.
 * @member {object} [display] Display of the operation.
 * @member {string} [display.provider] The resource provider name.
 * @member {string} [display.resource] The resource name.
 * @member {string} [display.operation] The operation.
 * @member {string} [display.description] The description of the operation.
 * @member {string} [origin] The operation origin.
 */
export interface ResourceOperation {
  name?: string;
  display?: ResourceOperationDisplay;
  origin?: string;
}

/**
 * @class
 * Initializes a new instance of the AvailableOperations class.
 * @constructor
 * Available operation list.
 *
 * @member {array} [value] An array of available operations.
 */
export interface AvailableOperations {
  value?: ResourceOperation[];
}


/**
 * @class
 * Initializes a new instance of the PaginatedOperationalizationClustersList class.
 * @constructor
 * Paginated list of operationalization clusters.
 *
 * @member {string} [nextLink] A continuation link (absolute URI) to the next
 * page of results in the list.
 */
export interface PaginatedOperationalizationClustersList extends Array<OperationalizationCluster> {
  nextLink?: string;
}
