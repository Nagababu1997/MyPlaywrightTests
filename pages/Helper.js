const { expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

class Helper {
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async logStep(description) {
        await allure.step(description, () => { });
    }

    async waitForElement(element, description) {
        await allure.step(`${description}`, async () => {
            try {
                const el = element.first();

                await el.page().waitForLoadState('domcontentloaded');
                await el.scrollIntoViewIfNeeded();
                await el.waitFor({ state: 'visible', timeout: 15000 });
                await expect(el).toBeVisible({ timeout: 15000 }); 
                // await expect(element).toBeVisible({ timeout: 5000 });
            } catch (error) {
                // Capture full-page screenshot if element not visible
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw error with clear message
                throw new Error(`${description} is not visible. ${error.message}`);
            }
        });
    }
    async verifyElementVisibility1(element, description) {
        await allure.step(`${description}`, async () => {
            try {
                await element.waitFor({ state: 'visible', timeout: 5000 });
                await expect(element).toBeVisible({ timeout: 5000 });
            } catch (error) {
                // Capture full-page screenshot if element not visible
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw error with clear message
                throw new Error(`${description} is not visible. ${error.message}`);
            }
        });
    }

    async getLocatorText(element, description) {
        return await allure.step(`Verify ${description} is visible and capture text`, async () => {
            try {
                await element.waitFor({ state: 'visible', timeout: 5000 });
                await expect(element).toBeVisible({ timeout: 5000 });

                // ✅ Text comes ONLY from locator
                const text = await element.innerText();

                // ✅ Attach text to Allure
                await allure.attachment(
                    `${description} - Text`,
                    text,
                    'text/plain'
                );

                return text;

            } catch (error) {
                const screenshot = await element.page().screenshot({ fullPage: true });

                await allure.attachment(
                    `Screenshot - ${description}`,
                    screenshot,
                    'image/png'
                );

                throw new Error(`${description} is not visible. ${error.message}`);
            }
        });
    }

    async verifyElementVisibility(element, description) {
        await allure.step(`Verify ${description} is visible`, async () => {
            try {
                await element.waitFor({ state: 'visible', timeout: 5000 });
                await expect(element).toBeVisible({ timeout: 5000 });
            } catch (error) {
                // Capture full-page screenshot if element not visible
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw error with clear message
                throw new Error(`${description} is not visible. ${error.message}`);
            }
        });
    }
    async verifyElement1(element, description) {
        await allure.step(`Verify ${description} is visible`, async () => {
            try {
                await element.waitFor({ state: 'visible', timeout: 5000 });
                await expect(element).toBeVisible({ timeout: 5000 });
                // Capture full-page screenshot if element not visible
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

            } catch (error) {
                // Capture full-page screenshot if element not visible
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw error with clear message
                throw new Error(`${description} is not visible. ${error.message}`);
            }
        });
    }
    async click(element) {
        try {
            await element.waitFor({ state: 'visible', timeout: 5000 });
            await element.click();

        } catch (error) {
            const screenshot = await element.page().screenshot();

            await allure.attachment(`Screenshot - Click Failed`, screenshot, 'image/png');

            throw new Error(`Click action failed. Reason: ${error.message}`);
        }
    }
    async clickElement(element, description) {
        await allure.step(`Click ${description}`, async () => {
            try {
                const el = element.first(); // ✅ handles multiple matches

                await el.page().waitForLoadState('domcontentloaded'); // ✅ sync

                await el.scrollIntoViewIfNeeded(); // ✅ important for CI

                await el.waitFor({ state: 'visible', timeout: 15000 }); // ✅ increase timeout

                await el.click({ timeout: 10000 });

            } catch (error) {
                const screenshot = await element.page().screenshot({ fullPage: true });

                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                throw new Error(`Failed to click on ${description}. Reason: ${error.message}`);
            }
        });
    }
    /*
        async clickElement(element, description) {
            await allure.step(`Click ${description}`, async () => {
                try {
                    // Ensure element is visible and enabled before clicking
                    await element.waitFor({ state: 'visible', timeout: 5000 });
                    await element.click();
    
                } catch (error) {
                    // Capture full-page screenshot for debugging
                    const screenshot = await element.page().screenshot();
    
                    // Attach screenshot to Allure report
                    await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');
    
                    // Throw a clear, helpful error
                    throw new Error(`Failed to click on ${description}. Reason: ${error.message}`);
                }
            });
        }
            */
    async clickElement1(element, description) {
        await allure.step(`${description}`, async () => {
            try {
                // Ensure element is visible and enabled before clicking
                await element.waitFor({ state: 'visible', timeout: 5000 });
                await element.click();

            } catch (error) {
                // Capture full-page screenshot for debugging
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw a clear, helpful error
                throw new Error(`Failed to click on ${description}. Reason: ${error.message}`);
            }
        });
    }
    async clickEnter(element, description = 'Search Field') {

        await allure.step(`Press Enter on ${description}`, async () => {
            try {
                await element.waitFor({ state: 'visible', timeout: 5000 });
                await element.press('Enter');

            } catch (error) {

                const screenshot = await element.page().screenshot();
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                throw new Error(`Failed to press Enter on ${description}. Reason: ${error.message}`);
            }
        });

    }
    async verifyDropdownOptionExists(dropdown, optionText) {
        await allure.step(`Verify dropdown option "${optionText}" is present`, async () => {
            const option = dropdown.locator('option', { hasText: optionText });
            await expect(option).toHaveCount(1);
        });
    }
    async selectDropdownOption(dropdown, value) {
        await allure.step(
            `Select dropdown option "${value}" from the Select Feedback Type list`,
            async () => {

                // Ensure dropdown is ready
                await expect(dropdown).toBeVisible();
                await expect(dropdown).toBeEnabled();

                // Select option (ONLY ONCE)
                const result = await dropdown.selectOption({ value });

                console.log('Selected:', result);

                // Assertion
                await expect(dropdown).toHaveValue(value);
            }
        );
    }

    async switchKid(page, name) {

        await allure.step(`Switch to kid '${name}'`, async () => {

            try {
                const menu = page.locator("#dropdownMenuButton1");

                await menu.waitFor({ state: 'visible' });
                await menu.click();

                const dropdown = page.locator("//ul[contains(@class,'show')]");
                await dropdown.waitFor({ state: 'visible' });

                // ✅ Scoped locator (FIXED)
                // const kid = dropdown.getByText(name, { exact: true });
                const kid = dropdown.locator(`text=${name}`).first();
                // const kid = dropdown.locator(`.//a[normalize-space()='${name}']`);

                // console.log(await page.locator(`text=${name}`).count());

                await kid.waitFor({ state: 'visible' });
                await kid.click();

                await page.waitForLoadState('networkidle');

            } catch (error) {
                const screenshot = await page.screenshot();
                await allure.attachment(`Switch Kid Failed (${name})`, screenshot, 'image/png');

                throw error;
            }
        });
    }
    async sendKeys(element, sendElements, description) {
        await allure.step(`Enter ${description}`, async () => {
            try {
                await element.fill(sendElements);
            } catch (error) {
                // Capture full-page screenshot for debugging
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw a clear, helpful error
                throw new Error(`Failed to click on ${description}. Reason: ${error.message}`);

            }
        });
    }

    async comapreElementText(element, expectedText, description) {
        await allure.step(`${description}`, async () => {
            try {
                await expect(element).toHaveText(expectedText, { timeout: 5000 });
            } catch (error) {
                // Capture full-page screenshot for debugging
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description} is mismatched`, screenshot, 'image/png');

                // Throw a clear, helpful error
                throw new Error(`Failed to click on ${description}. Reason: ${error.message}`);
            }
        })
    }
    async compareText(element, expectedText, description) {
        await allure.step(`Verify ${description} text`, async () => {
            try {
                // Get actual text and clean it
                let actualText = await element.innerText();
                actualText = actualText.replace('(current)', '').trim();

                // Log both values in console for debugging
                console.log(`Expected: "${expectedText}" | Actual: "${actualText}"`);

                // Compare normalized text
                expect(actualText).toBe(expectedText);

            } catch (error) {
                // Capture screenshot for Allure
                // Capture full-page screenshot for debugging
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw a clear, helpful error
                throw new Error(`Failed to verify ${description}. Reason: ${error.message}`);
            }
        });
    }

    async scrollInToView(element, description) {
        await allure.step(`Scroll into view the ${description}`, async () => {
            try {
                await element.scrollIntoViewIfNeeded();
            } catch (error) {
                // Capture full-page screenshot for debugging
                const screenshot = await element.page().screenshot();

                // Attach screenshot to Allure report
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');

                // Throw a clear, helpful error
                throw new Error(`Failed to click on ${description}. Reason: ${error.message}`);

            }
        });
    }


    /**
      * Validate toast message visibility and content with Allure reporting
      * @param {string} expectedMessage - The expected toast message text
      * @param {string} description - Description for Allure step (e.g., "Invalid login toast")
      * @param {number} timeout - Wait time for toast to appear (default: 5000 ms)
      */
    // In Helper.js
    async verifyToastMessage(page, expectedMessage, description, timeout = 5000) {
        await allure.step(`Verify toast message: ${description}`, async () => {
            try {
                const toast = page.getByText(expectedMessage, { exact: true });
                await expect(toast).toBeVisible({ timeout });
                const actualText = await toast.textContent();
                expect(actualText).toContain(expectedMessage);

                const screenshot = await page.screenshot();
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');
            } catch (error) {
                const screenshot = await page.screenshot();
                await allure.attachment(`Screenshot - ${description}`, screenshot, 'image/png');
                throw new Error(`Failed to verify toast: ${description}. Reason: ${error.message}`);
            }
        });
    }



}

module.exports = new Helper();
