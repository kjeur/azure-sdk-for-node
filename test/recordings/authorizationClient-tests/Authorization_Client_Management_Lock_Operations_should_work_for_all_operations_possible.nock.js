// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01', '*')
  .reply(201, "{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:697024a5-b626-4945-a03b-7e57717c70d2',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '535ee5e3-8c6b-4018-bb11-4a5b94cd71bb',
  'x-ms-routing-request-id': 'WESTUS:20151027T002323Z:535ee5e3-8c6b-4018-bb11-4a5b94cd71bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01', '*')
  .reply(201, "{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:697024a5-b626-4945-a03b-7e57717c70d2',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '535ee5e3-8c6b-4018-bb11-4a5b94cd71bb',
  'x-ms-routing-request-id': 'WESTUS:20151027T002323Z:535ee5e3-8c6b-4018-bb11-4a5b94cd71bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(404, "{\"error\":{\"code\":\"LockNotFound\",\"message\":\"The lock 'testlock1' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:64f52463-0d5b-4341-848c-3963dbd1df9e',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'f0fdab9a-c14c-4245-bd45-1f1b7a565ddd',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:f0fdab9a-c14c-4245-bd45-1f1b7a565ddd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(404, "{\"error\":{\"code\":\"LockNotFound\",\"message\":\"The lock 'testlock1' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '86',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:64f52463-0d5b-4341-848c-3963dbd1df9e',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'f0fdab9a-c14c-4245-bd45-1f1b7a565ddd',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:f0fdab9a-c14c-4245-bd45-1f1b7a565ddd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks?$filter=%5Bobject%20Object%5D&api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:21a87974-9a53-4c14-ab82-b27d984fdee5',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ce40cac6-df61-4ffc-a8a7-9447893fbaeb',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:ce40cac6-df61-4ffc-a8a7-9447893fbaeb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks?$filter=%5Bobject%20Object%5D&api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:21a87974-9a53-4c14-ab82-b27d984fdee5',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ce40cac6-df61-4ffc-a8a7-9447893fbaeb',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:ce40cac6-df61-4ffc-a8a7-9447893fbaeb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks?api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:a52e1ba5-9122-4016-b0e7-20d5160c7dd3',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '41f6d1eb-fb17-43ff-bc87-bc075efa821a',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:41f6d1eb-fb17-43ff-bc87-bc075efa821a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Authorization/locks?api-version=2015-01-01')
  .reply(200, "{\"value\":[{\"properties\":{\"level\":\"CanNotDelete\",\"notes\":\"Optional text.\"},\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1\",\"type\":\"Microsoft.Authorization/locks\",\"name\":\"testlock1\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:a52e1ba5-9122-4016-b0e7-20d5160c7dd3',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '41f6d1eb-fb17-43ff-bc87-bc075efa821a',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:41f6d1eb-fb17-43ff-bc87-bc075efa821a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'westus:15329b11-947b-456c-afd8-12409e6bbcbc',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8ad82235-3f94-41e0-972b-60f476a11f8e',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:8ad82235-3f94-41e0-972b-60f476a11f8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup8747/providers/Microsoft.Authorization/locks/testlock1?api-version=2015-01-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': 'westus:15329b11-947b-456c-afd8-12409e6bbcbc',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8ad82235-3f94-41e0-972b-60f476a11f8e',
  'x-ms-routing-request-id': 'WESTUS:20151027T002324Z:8ad82235-3f94-41e0-972b-60f476a11f8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 27 Oct 2015 00:23:24 GMT',
  connection: 'close' });
 return result; }]];