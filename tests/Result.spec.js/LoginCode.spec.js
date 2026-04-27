import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.unfoldlabs.com/mysecureme_emm/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('support@unfoldlabs.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin@123');
  await page.getByText('Login').click();
});