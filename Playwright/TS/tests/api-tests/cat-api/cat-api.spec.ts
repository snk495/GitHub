import { test, expect } from '@playwright/test';

test.describe('TheCatAPI Success Tests - No API Key', () => {
  const baseUrl = 'https://api.thecatapi.com/';

  test('Successful response returned for a random image from the GET endpoint', async ({ request }) => {
    // Act
    const response = await request.get(`${baseUrl}/v1/images/search`);
    const responseBody = await response.json();
    
    // Assert
    expect(response.status()).toBe(200);
    expect(responseBody[0]).toHaveProperty('id');
    expect(responseBody[0]).toHaveProperty('url');
    expect(responseBody[0]).toHaveProperty('width');
    expect(responseBody[0]).toHaveProperty('height');
  });

  test('Successful response returned when passing an image ID from the GET endpoint', async ({ request }) => {
    // Act
    const response = await request.get(`${baseUrl}/v1/images/c1s`);
    const responseBody = await response.json();
    
    // Assert
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('id', 'c1s');
  });

  test('Successful response returned when passing in a limit from the GET endpoint', async ({ request }) => {
    // Act
    const response = await request.get(`${baseUrl}/v1/images/search?limit=10`);
    const responseBody = await response.json();
    
    // Assert
    expect(response.status()).toBe(200);
    expect(responseBody.length).toBe(10);
  });
});
