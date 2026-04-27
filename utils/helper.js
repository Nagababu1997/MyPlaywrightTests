// utils/helpers.js

// Take screenshot
export async function takeScreenshot(page, name) {
  await page.screenshot({ path: `./screenshots/${name}.png`, fullPage: true });
}

/**
 * Capture toast message text after an action
 * @param {Page} page - Playwright page instance
 * @param {string} selector - CSS/XPath selector for toast
 * @param {number} timeout - timeout in ms (default: 5000)
 * @returns {Promise<string>} - Toast message text
 */
export async function getToastMessage(page, selector = '.toast-message', timeout = 1000) {
  const toast = page.locator(selector);

  // Wait for toast to appear
  await toast.waitFor({ state: 'visible', timeout });

  // Capture text
  const message = await toast.innerText();

  // Wait for toast to disappear
  await toast.waitFor({ state: 'hidden', timeout });

  return message;
}
