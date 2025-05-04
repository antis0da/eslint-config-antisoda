export default `import { test, expect, Page } from '@playwright/test';

test('Playwright Test Violations', async ({ page }: { page: Page }) => {
  // playwright/no-wait-for-timeout: Use specific locators/waits instead.
  await page.waitForTimeout(1000);

  // playwright/no-page-pause: page.pause() should not be committed.
  await page.pause();

  // playwright/missing-playwright-await: Actions like click must be awaited.
  page.locator('button').click(); // Missing await

  const text = await page.textContent('div');
  // playwright/valid-expect: expect must be awaited or returned.
  expect(text).toContain('Hello'); // Missing await

  // playwright/no-force-option: Avoid using { force: true }.
  await page.locator('button').click({ force: true });

  // playwright/no-element-handle: Prefer locators over element handles.
  const handle = await page.$('div');
  await handle?.click();
});

// Missing async
test('Missing async', ({ page }) => {
  // Function should be async
  console.log('Not async');
});
`
