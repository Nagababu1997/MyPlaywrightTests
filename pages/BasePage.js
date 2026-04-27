// pages/BasePage.js
class BasePage {
  constructor(page) {
    this.page = page;
    this.context = page.context();

    // Automatically update when a new page (tab) opens
    this.context.on('page', async (newPage) => {
      await newPage.waitForLoadState('domcontentloaded');
      console.log(`Switched to new tab: ${newPage.url()}`);
      this.page = newPage; // Update to latest opened tab
    });
  }

  async switchToLatestTab() {
    const allPages = this.context.pages();
    const lastPage = allPages[allPages.length - 1];
    this.page = lastPage;
    await this.page.bringToFront();
    console.log(`Switched manually to tab: ${this.page.url()}`);
    return this.page;
  }

  async verifyToastMessage(selector, expectedText) {
        const toast = this.page.locator(selector);

        try {
            // Wait for toast to appear
            await toast.waitFor({ state: 'visible', timeout: 5000 });
            const toastText = await toast.textContent();

            // Attach toast text to Allure report
            await allure.step('Toast Message', async () => {
                await allure.attachment(
                    'Toast Text',
                    toastText || 'No text found',
                    'text/plain'
                );
            });

            // Verify toast text
            await expect(toast).toContainText(expectedText);

            // Capture screenshot
            const screenshot = await this.page.screenshot();
            await allure.attachment('Toast Screenshot', screenshot, 'image/png');

            // Wait for it to disappear
            await toast.waitFor({ state: 'hidden', timeout: 10000 });

            console.log('Toast verified:', toastText);
            return toastText;

        } catch (error) {
            const screenshot = await this.page.screenshot();
            await allure.attachment('Toast Failure Screenshot', screenshot, 'image/png');
            throw new Error(`Toast verification failed: ${error.message}`);
        }
    }
}

module.exports = BasePage;
