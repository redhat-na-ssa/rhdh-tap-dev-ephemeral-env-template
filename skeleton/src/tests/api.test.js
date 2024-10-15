// tests/api.test.js
const { test, expect } = require('@playwright/test');

test('API endpoint test', async ({ request }) => {
  /* replace brancname on line 6 and 10 */
  const response = await request.get('http://${{values.component_id}}-<<branchname>>-quarkus-template:8080/hello');
  expect(response.ok()).toBeTruthy();
  const data = await response.text();
  console.log('Response text:', data);
  expect(data).toBe('Hello RESTEasy <<branchname>>');
});
