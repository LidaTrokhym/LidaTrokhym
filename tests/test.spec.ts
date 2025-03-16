import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Screeshots", async({ page }) => {
  // 1. step is load website
  await page.goto('https://example.com/')
  // 2. take screenshot of full page
  await page.screenshot({ path: 'screenshot.png', fullPage: true})
})

test('Single element Screenshot', async ({ page }) => {
  await page.goto('https://example.com/')
  const element = await page.$('h1')
  await element?.screenshot( { path: 'single_element_screenshot.png'})
})

