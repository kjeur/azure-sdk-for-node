// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:12:25 GMT',
  etag: '0x8D4CFABA3586A99',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c30476c1-0838-47c7-88c6-26c18de07f25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Thu, 20 Jul 2017 20:12:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:12:25 GMT',
  etag: '0x8D4CFABA3586A99',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c30476c1-0838-47c7-88c6-26c18de07f25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask',
  date: 'Thu, 20 Jul 2017 20:12:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D4CFABA3586A99\",\"creationTime\":\"2017-07-20T20:12:25.2920473Z\",\"lastModified\":\"2017-07-20T20:12:25.2920473Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-07-20T20:12:25.2920473Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 20 Jul 2017 20:12:25 GMT',
  etag: '0x8D4CFABA3586A99',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '61eb47f4-eb59-471a-bfc2-89b57ec0f7a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:12:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"ApplicationPacakgeReferenceTask\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/ApplicationPacakgeReferenceTask\",\"eTag\":\"0x8D4CFABA3586A99\",\"creationTime\":\"2017-07-20T20:12:25.2920473Z\",\"lastModified\":\"2017-07-20T20:12:25.2920473Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-07-20T20:12:25.2920473Z\",\"commandLine\":\"cmd /c echo hello world\",\"applicationPackageReferences\":[\r\n    {\r\n      \"applicationId\":\"my_application_id\"\r\n    }\r\n  ],\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 20 Jul 2017 20:12:25 GMT',
  etag: '0x8D4CFABA3586A99',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '61eb47f4-eb59-471a-bfc2-89b57ec0f7a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 20 Jul 2017 20:12:24 GMT',
  connection: 'close' });
 return result; }]];