import {test,expect} from '@playwright/test'
import { request } from 'node:http'

// Independent API test for Amazon search suggestions to verify response structure.
test('Get API response for suggestions', async ({ request }) => {
  const response = await request.get('https://www.amazon.com/suggestions');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect (body).toHaveProperty("suggestions")
  
});
