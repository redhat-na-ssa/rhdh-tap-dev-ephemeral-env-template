// tests/api.test.js
const { test, expect } = require('@playwright/test');

test('API endpoint test', async ({ request }) => {
  /* replace brancname on line 6 */
  const response = await request.get('https://${{values.component_id}}-<<branchname>>-quarkus-template/hello');
  expect(response.ok()).toBeTruthy();
  const data = await response.text();
  console.log('Response text:', data);
  expect(data).toBe('Hello sup branch 2');
});