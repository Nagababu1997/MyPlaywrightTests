class KidSecureDashboard {
    constructor(page) {
        this.page = page;

        // Locators
        this.homebutton       = page.locator("//a[contains(text(),'Home')]");
        this.featuresbutton   = page.locator("//a[contains(text(),'Features')]");
        this.pricingButton    = page.locator("//a[contains(text(),'Pricing')]");
        this.HowItWorksButton = page.locator("//a[contains(text(),'How it Works?')]");
        this.FAQsButton       = page.locator("a[href='#faq-block']");
        this.parentloginbutton= page.locator(".login-btn");
        this.userEmailField = page.locator("#username");      // added # for id


    }

    async goto() {
        await this.page.goto('https://kidsecure.app/');
    }


    async verifyDashBoard() {
        // Option 1: Using Playwright's isVisible()
        console.log("Home visible:", await this.homebutton.isVisible());
        console.log("Features visible:", await this.featuresbutton.isVisible());
        console.log("Pricing visible:", await this.pricingButton.isVisible());
        console.log("How it Works visible:", await this.HowItWorksButton.isVisible());
        console.log("FAQs visible:", await this.FAQsButton.isVisible());
        // await page.click(this.parentloginbutton);
        // Wait for new tab after clicking Parent Login
        const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'), // wait for new tab
        this.parentloginbutton.click()
  ]);

  await newPage.waitForLoadState('domcontentloaded');
  return newPage; // pass back the tab reference
  
  console.log("New page URL:", newPage.url());

    

        // Option 2 (recommended if you are using @playwright/test):
        // await expect(this.homebutton).toBeVisible();
        // await expect(this.featuresbutton).toBeVisible();
        // await expect(this.pricingButton).toBeVisible();
        // await expect(this.HowItWorksButton).toBeVisible();
        // await expect(this.FAQsButton).toBeVisible();
    }
}
module.exports = KidSecureDashboard;
