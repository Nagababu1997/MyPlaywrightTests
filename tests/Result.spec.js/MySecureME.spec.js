import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mysecureme.com/');
  await page.getByRole('link', { name: 'Features', exact: true }).click();
  await page.locator('.scrollToTop').click();
  await page.locator('#navbar-mobile').getByRole('link', { name: 'Pricing' }).click();
  await page.locator('.scrollToTop').click();
  await page.getByRole('link', { name: 'Testimonial' }).click();
  await page.locator('.scrollToTop').click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.locator('.scrollToTop').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Login' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Login ' }).click();
});