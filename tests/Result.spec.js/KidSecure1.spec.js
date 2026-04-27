import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kidsecure.app/');
  await page.getByRole('link', { name: 'Features' }).click();
  await page.getByRole('link', { name: 'Pricing' }).click();
  await page.getByRole('link', { name: 'How it Works?' }).click();
  await page.getByRole('link', { name: 'FAQ\'S' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Parent Login' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'Enter Email ID' }).click();
  await page1.getByRole('textbox', { name: 'Enter Email ID' }).fill('kidsecure.qa@gmail.com');
  await page1.getByRole('textbox', { name: 'Enter PIN' }).click();
  await page1.getByRole('textbox', { name: 'Enter PIN' }).fill('123456');
  await page1.getByRole('button', { name: 'Login' }).click();
});